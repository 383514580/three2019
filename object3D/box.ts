import { BoxGeometry, MeshPhongMaterial, Mesh } from "three";
export default function(){
    const geometry = new BoxGeometry(100,100,100);
    const material = new MeshPhongMaterial({
        color: 0xff0000,
        specular: 0xff0000
    });
    const mesh = new Mesh(geometry, material);
    mesh.position.y = 50;
    mesh.castShadow = true;
    return mesh;
}
