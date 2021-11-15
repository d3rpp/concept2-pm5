enum CONTROL_EVENT {
	Disconnect,
}

export type ErgEventType = '' | 'disconnect';

export class ErgEvent {
	public type: ErgEventType;

	public detail: any;

	private _target: any;
	public set target(value: any) {
		this._target = value;
	}

	constructor(type: ErgEventType, detail?: any) {
		this.type = type;
		this.detail = detail;
	}
}
