interface Shape {
  w: number; // width
  h: number; // height
  tl: number; // Top Left Radius
  tr: number; // Top Right Radius
  bl: number; // Bottom Left Radius
  br: number; // Bottom Right Radius
}

interface Position {
  x: number;
  y: number;
}

export function circle(radius: number): Shape {
  return {
    w: radius * 2,
    h: radius * 2,
    tl: radius,
    tr: radius,
    bl: radius,
    br: radius
  };
}

export function rectangle(width: number, height: number, radius: number): Shape {
  return {
    w: width,
    h: height,
    tl: radius,
    tr: radius,
    bl: radius,
    br: radius
  };
}

export function drawPath(shape: Shape, position: Position) {
  return `
    M ${position.x + shape.tl - shape.w / 2},${position.y - shape.h / 2}
    H ${position.x - shape.tr + shape.w / 2}
    A ${shape.tr},${shape.tr} 0 0 1 ${position.x + shape.w / 2},${position.y + shape.tr - shape.h / 2}
    V ${position.y - shape.br + shape.h / 2}
    A ${shape.tr},${shape.tr} 0 0 1 ${position.x - shape.br + shape.w / 2},${position.y + shape.h / 2}
    H ${position.x + shape.bl - shape.w / 2}
    A ${shape.tr},${shape.tr} 0 0 1 ${position.x - shape.w / 2},${position.y - shape.bl + shape.h / 2}
    V ${position.y + shape.tl - shape.h / 2}
    A ${shape.tr},${shape.tr} 0 0 1 ${position.x + shape.tl - shape.w / 2},${position.y - shape.h / 2}
    Z
    `
}

export function isMouseOverElement(pos: Position, rect: DOMRect): boolean {
  return (pos.x >= rect.left && pos.x <= rect.right && pos.y >= rect.top && pos.y <= rect.bottom)
}