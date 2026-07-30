import { Vector } from "./vector.js";
import { Opta } from "./opta.js";

export function VEC_CORE(ion){
    const vec = new Vector(ion.pulse, ion.warp, ion.charge);
    const opt = new Opta(vec);

    return {
        mode: "vector",
        x: vec.x,
        y: vec.y,
        z: vec.z,
        magnitude: vec.magnitude(),
        flight: opt.optimize()
    };
}
