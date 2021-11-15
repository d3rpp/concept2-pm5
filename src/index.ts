import { SERVICES } from './CONSTANTS';
import { EventDispatcher } from './external/EventListener';
import { ErgEvent } from './types';

export default class PM5 extends EventDispatcher {
	private device: BluetoothDevice;
	private server: BluetoothRemoteGATTServer;

	public get connected(): boolean {
		return (
			!!this.device && !!this.device.gatt && !!this.device.gatt.connected
		);
	}

	constructor() {
		// "Derrived Classes must contain a super call"
		// even though EventDispatcher doesn't have a constructor
		super();
	}

	public connect(): Promise<void> {
		return new Promise<void>((res, rej) => {
			// If the browser doesn't have bluetooth, error out
			// @ts-ignore
			if (!navigator.bluetooth) {
				// Reject the promise
				rej(
					new Error(
						"This browser does not support bluetooth or doesn't have it enabled\nThis tool only works for Google Chrome, so if you have google chrome, please refer to https://support.google.com/chrome/answer/6362090 for assistance in setting it up"
					)
				);
			}

			// Bluetooth is a thing
			return navigator.bluetooth
				.requestDevice({
					filters: [{ services: [SERVICES.discovery.id] }],
					optionalServices: [
						SERVICES.information.id,
						SERVICES.control.id,
						SERVICES.rowing.id,
					],
				})
				.then((device) => {
					this.device = device;
					this.device.addEventListener(
						'gattserverdisconnected',
						(disconnectedEvent) => {
							this.dispatchEvent(new ErgEvent('disconnect'));
						}
					);

					return device.gatt.connect();
				})
				.then((server) => {
					this.server = server;
					res();
				})
				.catch((error) => {
					console.error(error);
					rej(error);
				});
		});
	}

	public disconnect() {
		if (!this.connected) return;
		this.device.gatt.disconnect();
	}
}
