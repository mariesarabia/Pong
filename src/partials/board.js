import { SVG_NS } from '../settings';

export default class Board {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    render(svg) {

		let rect = document.createElementNS(SVG_NS, 'rect');
		rect.setAttributeNS(null, 'width', this.width);
        rect.setAttributeNS(null, 'height', this.height);
        rect.setAttributeNS(null, 'fill', '#353535');
        svg.appendChild(rect);
        
        let line = document.createElementNS(SVG_NS, 'line');
        line.setAttributeNS(null, 'x1', '256');
        line.setAttributeNS(null, 'y1', '256');
        line.setAttributeNS(null, 'x2', '255');
        line.setAttributeNS(null, 'y2', '0');
        line.setAttributeNS(null, 'stroke', 'white');
        line.setAttributeNS(null, 'stroke-width', '3');
        line.setAttributeNS(null, 'stroke-dasharray', '5, 5')
        svg.appendChild(line);
    }

}