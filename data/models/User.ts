import { Vector3 } from "./Vector3";

export class User {
    private _id: string;
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _position: Vector3;
    public get position(): Vector3 {
        return this._position;
    }
    public set position(value: Vector3) {
        this._position = value;
    }

    constructor(id?: string, name?: string, position? : Vector3) {
        if(id !== undefined) this._id = id;
        else this._id = '';
        if(name !== undefined) this._name = name;
        else this._name = '';
        if(position !== undefined) this._position = position;
        else this._position = new Vector3();
    }
}