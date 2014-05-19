// Type definitions for Paper.js v0.9.18
// Project: http://paperjs.org/
// Clark Stevenson 

declare module paper {

    export var version: string;
    export var project: Project;
    export var projects: Project;
    export var view: View;
    export var tool: Tool;
    export var tools: Tool[];
    export var settings: Object;

    export function install(scope: any): void;
    export function setup(canvas: HTMLCanvasElement): void;
    export function activate(): void;

    export interface IFrameEvent {

        count: number;
        time: number;
        delta: number;

    }

    export class PaperScope {

        version: string;
        project: Project;
        projects: Project[];
        view: View;
        tool: Tool;
        tools: Tool[];
        settings: Object;

        install(scope: any): void;
        setup(canvas: HTMLCanvasElement): void;
        activate(): void;

        static get (id: string): PaperScope;

    }

    export class PaperScript {

        static compile(code: string, url: string): string;
        static execute(code: string, scope: PaperScript, url: string): void;
  
    }

    export class Point {

        static min(point1: Point, point2: Point): Point;
        static max(point1: Point, point2: Point): Point;
        static random(): Point;

        constructor(x: number, y: number);
        constructor(values: number[]);
        constructor(object: Object);
        constructor(size: Size);
        constructor(point: Point);

        x: number;
        y: number;
        length: number;
        angle: number;
        angleInRadians: number;
        quadrant: number;
        selected: boolean;
        
        add(point: Point): Point;
        add(x: number, y: number): Point;
        add(value: number): Point;

        subtract(point: Point): Point;
        subtract(x: number, y: number): Point;
        subtract(value: number): Point;

        multiply(point: Point): Point;
        multiply(x: number, y: number): Point;
        multiply(value: number): Point;

        divide(point: Point): Point;
        divide(x: number, y: number): Point;
        divide(value: number): Point;

        modulo(point: Point): Point;
        modulo(x: number, y: number): Point;
        modulo(value: number): Point;

        equals(point: Point): boolean;
        clone(): Point;
        toString(): string;
        getAngle(Point: Point): number;
        getAngleInRadians(point: Point): number;
        getDirectedAngle(point: Point): number;
        getDistance(point: Point, squared?: boolean): number;
        normalize(length?: number): Point;
        rotate(angle: number, center: Point): Point;
        transform(matrix: Matrix): Point;

        isInside(rect: Rectangle): boolean;
        isClose(point: Point, tolerance: number): boolean;
        isColinear(point: Point): boolean;
        isOrthogonal(point: Point): boolean;
        isZero(): boolean;
        isNan(): boolean;

        dot(point: Point): number;
        cross(point: Point): number;
        project(point: Point): Point;

        round(): Point;
        ceil(): Point;
        floor(): Point;
        abs(): Point;
                        
                     
    }

    export class Size {

        static min(size1: Size, size2: Size): Size;
        static max(size1: Size, size2: Size): Size;
        static random(): Size;

        constructor(width: number, height: number);
        constructor(array: number[]);
        constructor(object: Object);
        constructor(size: Size);
        constructor(point: Point);

        add(point: Point): Point;
        add(x: number, y: number): Point;
        add(value: number): Point;

        subtract(point: Point): Point;
        subtract(x: number, y: number): Point;
        subtract(value: number): Point;

        multiply(point: Point): Point;
        multiply(x: number, y: number): Point;
        multiply(value: number): Point;

        divide(point: Point): Point;
        divide(x: number, y: number): Point;
        divide(value: number): Point;

        modulo(point: Point): Point;
        modulo(x: number, y: number): Point;
        modulo(value: number): Point;

        width: number;
        height: number;

        equals(): boolean;
        clone(): Size;
        toString(): string;

        isZero(): boolean;
        isNan(): boolean;

        round(): Size;
        ceil(): Size;
        floor(): Size;
        abs(): Size;
   
    }

    export class Rectangle {

        constructor(point: Point, size: Size);
        constructor(x: number, y: number, width: number, height: number);
        constructor(object: Object);
        constructor(from: Point, to: Point);
        constructor(rt: Rectangle);

        x: number;
        y: number;
        width: number;
        height: number;
        point: Point;
        size: Size;

        left: number;
        top: number;
        right: number;
        bottom: number;

        center: Point;
        topLeft: Point;
        topRight: Point;
        bottomLeft: Point;
        bottomRight: Point;
        leftCenter: Point;
        topCenter: Point;
        rightCenter: Point;
        bottomCenter: Point;
        area: number;

        selected: boolean;

        clone(): Rectangle;
        equals(rect: Rectangle): boolean;
        toString(): string;
        isEmpty(): boolean;

        contains(point: Point): boolean;
        contains(rect: Rectangle): boolean;
        intersects(rect: Rectangle): boolean;

        intersect(rect: Rectangle): Rectangle;
        unite(rect: Rectangle): Rectangle;
        include(point: Point): Point;
        expand(amount: number): void;
        expand(size: Size): void;
        expand(point: Point): void;
        expand(hor: number, ver: number): void;
        scale(amount: number): void;
        scale(hor: number, ver: number): void;

    }

    export class Matrix {

        constructor(a: number, c: number, b: number, d: number, tx: number, ty: number);

        a: number;
        c: number;
        b: number;
        d: number;
        tx: number;
        ty: number;
        values: number;
        translation: Point;
        scaling: Point;
        rotation: number;

        set(a: number, c: number, b: number, d: number, tx: number, ty: number): Matrix;
        clone(): Matrix;
        equals(matrix: Matrix): boolean;
        toString(): string;
        reset(): void;
        apply(): boolean;
        translate(point: Point): Matrix;
        translate(dx: number, dy: number): Matrix;
        scale(scale: number, center?: Point): Matrix;
        scale(hor: number, ver: number, center?: Point): Matrix;
        rotate(angle: number, center: Point): Matrix;
        rotate(angle: number, x: number, y: number): Matrix;
        shear(shear: Point, center?: Point): Matrix;
        shear(hor: number, ver: number, center?: Point): Matrix;
        skew(skew: Point, center?: Point): Matrix;
        skew(hor: number, ver: number, center?: Point): Matrix;
        concatenate(mx: Matrix): Matrix;
        preConcatenate(mx: Matrix): Matrix;
        isIdentity(): boolean;
        isInvertible(): boolean;
        isSingular(): boolean;
        transform(point: Point): Matrix;
        transform(src: number[], dst: number[], count: number): number[];
        inverseTransform(point: Point): Matrix;
        decompose(): Object;
        inverted(): Matrix;
        applyToContext(ctx: CanvasRenderingContext2D): void;
            
    }

    export class Item {

        id: number;
        className: string;
        name: string;
        style: Style;
        visible: boolean;
        blendMode: string;
        opacity: number;
        selected: boolean;
        clipMask: boolean;
        data: Object;

        position: Point;
        pivot: Point;
        bounds: Rectangle;
        strokeBounds: Rectangle;
        handleBounds: Rectangle;
        rotation: number;
        scaling: Point;
        matrix: Matrix;
        globalMatrix: Matrix;
        applyMatrix: boolean;

        project: Project;
        view: View;
        layer: Layer;
        parent: Item;
        children: Item[];
        firstChild: Item;
        lastChild: Item;
        nextSibling: Item;
        previousSibling: Item;
        index: number;

        strokeColor: Color;
        strokeWidth: number;
        strokeCap: string;
        strokeJoin: string;
        dashOffset: number;
        dashArray: number[];
        miterLimit: number;
        windingRule: string;

        fillColor: Color;
        selectedColor: Color;

        onFrame: (event: IFrameEvent) => void;
        onMouseDown: (event: MouseEvent) => void;
        onMouseUp: (event: MouseEvent) => void;
        onClick: (event: MouseEvent) => void;
        onDoubleClick: (event: MouseEvent) => void;
        onMouseMove: (event: MouseEvent) => void;
        onMouseEnter: (event: MouseEvent) => void;
        onMouseLeave: (event: MouseEvent) => void;

        set(props: Object): Item;
        clone(insert?: boolean): Item;
        copyTo(item: Item): Item;
        rasterize(resolution: number): Raster;
        contains(point: Point): boolean;
        hitTest(point: Point, options?: { tolerance?: number; class?: string; fill?: boolean; stroke?: boolean; segments?: boolean; curves?: boolean; handles?: boolean; ends?: boolean; bounds?: boolean; center?: boolean; guides?: boolean; selected?: boolean; }): HitResult;
        matches(match: Object): boolean;
        getItems(match: Object): Item[];
        getItem(match: Object): Item;

        exportJSON(options?: { asString?: boolean; precision?: number }): string;
        importJSON(json: string): void;
        exportSVG(options?: { asString?: boolean; precision?: number; matchShapes?: boolean }): SVGElement;
        importSVG(svg: SVGElement, options?: Object): Item;
        importSVG(svg: string, options?: Object): Item;

        addChild(item: Item): Item;
        insertChild(index: number, item: Item): Item;
        addChildren(items: Item[]): Item[];
        insertChildren(index: number, items: Item[]): Item[];
        insertAbove(item: Item): Item;
        insertBelow(item: Item): Item;
        sendToBack(): void;
        bringToFront(): void;
        reduce(): Item;
        remove(): boolean;
        removeChildren(): Item[];
        removeChildren(from: number, to?: number): Item[];
        reverseChildren(): void;

        isEmpty(): boolean;

        hasFill(): boolean;
        hasStroke(): boolean;
        hasShadow(): boolean;

        hasChildren(): boolean;
        isInserted(): boolean;
        isAbove(item: Item): boolean;
        isBelow(item: Item): boolean;
        isParent(item: Item): boolean;
        isChild(item: Item): boolean;
        isDescendant(item: Item): boolean;
        isAncestor(item: Item): boolean;
        isGroupedWith(item: Item): boolean;

        translate(delta: number): Point;
        rotate(angle: number, center?: Point): void;
        scale(scale: number, center?: Point): void;
        scale(hor: number, ver: number, center?: Point): void;
        shear(shear: number, center?: Point): void;
        shear(hor: number, ver: number, center?: Point): void;
        transform(matrix: Matrix): void;
        globalToLocal(point: Point): Point;
        localToGlobal(point: Point): Point;
        fitBounds(rectangle: Rectangle, fill?: boolean): void;

        attach(type: string, callback: Function): void;
        attach(object: { mousedown?: any; mouseup?: any; mousedrag?: any; click?: any; doubleclick?: any; mousemove?: any; mouseenter?: any; mouseleave?: any; }): void;
        detach(type: string, callback: Function): void;
        detach(object: { mousedown?: any; mouseup?: any; mousedrag?: any; click?: any; doubleclick?: any; mousemove?: any; mouseenter?: any; mouseleave?: any; }): void;
        fire(type: string, event: Object): void;
        responds(type: string): boolean;

        removeOn(object: { onMouseMove?: boolean; onMouseDrag?: boolean; onMouseDown?: boolean; onMouseUp?: boolean;}): void;
        removeOnMove(): void;
        removeOnDown(): void;
        removeOnDrag(): void;
        removeOnUp(): void;

    }

    export class Group extends Item {

        constructor(children: Item[]);
        constructor(object: Object);

        clipped: boolean;

    }

    export class Layer extends Group {

        activate(): void;
 
    }

    export class Shape extends Item {

        static Circle(center: Point, radius: number): Shape;
        static Circle(object: Object): Shape;
        static Rectangle(rectangle: Rectangle, radius?: number): Shape;
        static Rectangle(point: Point, size: Size): Shape;
        static Rectangle(from: Point, to: Point): Shape;
        static Rectangle(object: Object): Shape;
        static Ellipse(rectangle: Rectangle): Shape;
        static Ellipse(object: Object): Shape;

        type: string;
        size: Size;
        radius: any;

    }


    export class Raster extends Item {

        constructor(source?: any, position?: any);

        size: Size;
        width: number;
        height: number;
        resolution: Size;
        image: any;
        canvas: HTMLCanvasElement;
        context: any;
        source: any;

        getSubCanvas(rect: Rectangle): HTMLCanvasElement;
        getSubRaster(rect: Rectangle): Raster;
        toDataURL(): string;
        drawImage(image: any, point: Point): void;
        getAverageColor(object: Path): Color;
        getAverageColor(object: Rectangle): Color;
        getAverageColor(object: Point): Color;
        getPixel(x: number, y: number): Color;
        getPixel(point: Point): Color;
        setPixel(x: number, y: number, color: Color): void;
        setPixel(point: Point, color: Color): void; 

        createImageData(size: Size): ImageData;
        getImageData(rect: Rectangle): ImageData;
        getImageData(data: ImageData, point: Point): ImageData;

    }

    export class PlacedSymbol extends Item {

        constructor(symbol: Symbol, point?: Point);

        symbol: Symbol;

    }

    export class HitResult {

        type: string;
        name: string;
        item: Item;
        location: CurveLocation;
        color: Color;
        segment: Segment;
        point: Point;

    }

    export class PathItem extends Item {

        pathData: string;

        getIntersections(path: PathItem, sorted?: Boolean): CurveLocation[];
        smooth(): void;

        moveTo(point: Point): void;
        lineTo(point: Point): void;
        cublicCurveTo(handle1: Point, handle2: Point, to: Point): void;
        quadraticCurveTo(handle: Point, to: Point): void;
        curveTo(through: Point, to: Point, parameter?: number): void;
        arcTo(through: Point, to: Point): void;
        arcTo(to: Point, clockwise?: boolean): void;
        closePath(join: boolean): void;

        moveBy(to: Point): void;
        lineBy(to: Point): void;
        curveBy(through: Point, to: Point, parameter: number): void;
        cublicCurveBy(handle1: Point, handle2: Point, to: Point): void;
        quadraticCurveBy(handle: Point, to: Point): void;
        arcBy(through: Point, to: Point): void;
        arcBy(to: Point, clockwise?: boolean): void;

        unite(path: PathItem): PathItem;
        intersect(path: PathItem): PathItem;
        subtract(path: PathItem): PathItem;
        exclude(path: PathItem): PathItem;
        divide(path: PathItem): PathItem;

    }

    export class Path extends PathItem {

        static Line(from: Point, to: Point): Path;
        static Line(object: Object): Path;
        static Circle(center: Point, radius: number): Path;
        static Circle(object: Object): Path;
        static Rectangle(rectangle: Rectangle, radius?: number): Path;
        static Rectangle(point: Point, size: Size): Path;
        static Rectangle(from: Point, to: Point): Path;
        static Rectangle(object: Object): Path;
        static Ellipse(rectangle: Rectangle): Path;
        static Ellipse(object: Object): Path;
        static Arc(from: Point, through: Point, to: Point): Path;
        static Arc(object: Object): Path;
        static RegularPolygon(center: Point, sides: number, radius: number): Path;
        static RegularPolygon(object: Object): Path;
        static Star(center: Point, points: number, radius1: number, radius2: number): Path;
        static Star(object: Object): Path;

        constructor(segments?: Segment[]);
        constructor(object: Object);
        constructor(pathData: string);

        segments: Segment[];
        firstSegment: Segment;
        lastSegment: Segment;
        curves: Curve[];
        firstCurve: Curve;
        lastCurve: Curve;
        closed: boolean;
        length: number;
        area: number;
        fullySelected: boolean;
        clockwise: boolean;
        interiorPoint: Point;

        add(segment: Segment): Segment;
        insert(index: number, segment: Segment): Segment;
        addSegments(segments: Segment[]): Segment[];
        insertSegments(index: number, segments: Segment[]): Segment[];
        removeSegment(index: number): Segment;
        removeSegments(): Segment[];
        removeSegments(from: number, to?: number): Segment[];
        flatten(maxDistance: number): void;
        simplify(tolerance?: number): void;
        split(offset: number): Path;
        split(location: CurveLocation): Path;
        split(index: number, parameter: number): Path;
        reverse(): void;
        join(path: Path): void;

        getLocationOf(point: Point): CurveLocation;
        getLocationAt(offset: number, isParameter?: boolean): CurveLocation;
        getPointAt(offset: number, isParameter?: boolean): Point;
        getTangentAt(offset: number, isParameter?: boolean): Point;
        getNormalAt(offset: number, isParameter?: boolean): Point;
        getNearestLocation(point: Point): CurveLocation;
        getNearestPoint(point: Point): Point;

    }

    export class CompoundPath extends PathItem {

        constructor(object: Object);
        constructor(pathData: string);

        clockwise: boolean;
        firstSegment: Segment;
        lastSegment: Segment;
        curves: Curve[];
        firstCurve: Curve;
        lastCurve: Curve;
        area: number;

        reverse(): void;

    }

    export class Segment {

        constructor(point?: Point, handleIn?: Point, handleOut?: Point);
        constructor(object: Object);

        point: Point;
        handleIn: Point;
        handleOut: Point;
        linear: boolean;
        selected: boolean;

        index: number;
        path: Path;
        curve: Curve;
        location: CurveLocation;

        next: Segment;
        previous: Segment;

        isColinear(segment: Segment): boolean;
        isArc(): boolean;
        reverse(): Segment;
        remove(): boolean;
        toString(): string;
        transform(matrix: Matrix): void;

    }

    export class Curve {

        constructor(segment1: Segment, segment2: Segment);
        constructor(point1: Point, handle1: Point, handle2: Point, point2: Point);

        point1: Point;
        point2: Point;
        handle1: Point;
        handle2: Point;
        segment1: Segment;
        segment2: Segment;
        path: Path;
        index: number;
        next: Curve;
        previous: Curve;
        selected: boolean;
        length: number;
        bounds: Rectangle;
        strokeBounds: Rectangle;
        handleBounds: Rectangle;

        isLinear(): boolean;
        divide(offset?: number, isParameter?: boolean): Curve;
        split(offset?: number, isParameter?: boolean): Path;
        reverse(): Curve;
        remove(): boolean;
        clone(): Curve;
        toString(): string;
        getParameterAt(offset: Point, start?: number): number;
        getParameterOf(point: Point): number;
        getLocationAt(offset: Point, isParameter?: boolean): CurveLocation;
        getLocationOf(point: Point): CurveLocation;
        getPointAt(offset: number, isParameter?: boolean): Point;
        getTangentAt(offset: number, isParameter?: boolean): Point;
        getNormalAt(offset: number, isParameter?: boolean): Point;
        getCurvatureAt(offset: number, isParameter?: boolean): Point;

    }

    export class CurveLocation {

        constructor(curve: Curve, parameter: number, point: Point);

        segment: Segment;
        curve: Curve;
        intersection: CurveLocation;
        path: Path;
        index: number;
        offset: number;
        curveOffset: number;
        parameter: number;
        point: Point;
        tangent: Point;
        normal: Point;
        distance: number;

        equals(location: CurveLocation): boolean;
        toString(): string;

    }

    export class Project {

        constructor(element: HTMLCanvasElement);

        view: View;
        currentStyle: Style;
        index: number;
        selectedItems: Item[];

        layers: Layer[];
        activeLayer: Layer;
        symbols: Symbol[];

        activate(): void;
        clear(): void;
        isEmpty(): boolean;
        remove(): void;
        selectAll(): void;
        deselectAll(): void;
        hitTest(point: Point, options?: { tolerance?: number; class?: string; fill?: boolean; stroke?: boolean; segments?: boolean; curves?: boolean; handles?: boolean; ends?: boolean; bounds?: boolean; center?: boolean; guides?: boolean; selected?: boolean; }): HitResult;
        getItems(match: Object): Item[];
        getItem(match: Object): Item;

        exportJSON(options?: { asString?: boolean; precision?: number }): string;
        importJSON(json: string): void;
        exportSVG(options?: { asString?: boolean; precision?: number; matchShapes?: boolean }): SVGElement;
        importSVG(svg: SVGElement, options?: Object): Item;
        importSVG(svg: string, options?: Object): Item;

    }

    export class Symbol {

        constructor(item: Item, dontCenter?: boolean);

        project: Project;
        definition: Item;

        place(position?: number): PlacedSymbol;
        clone(): Symbol;

    }

    export class Style {

        strokeScaling: boolean;
        view: View;

        strokeColor: Color;
        strokeWidth: number;
        strokeCap: string;
        strokeJoin: string;
        dashOffset: number;
        dashArray: number[];
        miterLimit: number;

        fillColor: Color;

        shadowColor: Color;
        shadowBlue: Color;
        shadowOffset: Color;

        selectedColor: Color;

        fontFamily: string;
        fontWeight: any;
        fontSize: any;
        leading: any;

        justification: string;

    }

    export class Color {

        constructor(red: number, green: number, blue: number, alpha?: number);
        constructor(gray: number, alpha?: number);
        constructor(object: Object);
        constructor(color: Gradient, origin: Point, destination: Point, highlight?: Point);

        type: string;
        components: number;
        alpha: number;

        red: number;
        green: number;
        blue: number;

        gray: number;

        hue: number;
        saturation: number;
        brightness: number;

        lightness: number;

        gradient: Gradient;
        highlight: Point;

        convert(type: string): Color;
        hasAlpha(): boolean;
        equals(color: Color): boolean;
        clone(): Color;

        toString(): string;
        toCss(hex: boolean): string;
        transform(matrix: Matrix): void;

    }

    export class Gradient {

        stops: GradientStop[];
        radial: boolean;

        clone(): Gradient;
        equals(gradient: Gradient): boolean;

    }

    export class GradientStop {

        constructor(color: Color, rampPoint?: number);

        rampPoint: number;
        color: Color;

        clone(): GradientStop;

    }

    export class View {

        element: HTMLCanvasElement;
        pixelRatio: number;
        resolution: number;
        viewSize: Size;
        bounds: Rectangle;
        size: Size;
        center: Point;
        zoom: number;

        onFrame: (event: IFrameEvent) => void;
        onResize: () => void;

        draw(): void;
        remove(): void;
        isVisible(): boolean;
        scrollBy(point: Point): void;
        play(): void;
        pause(): void;
        update(): void;
        projectToView(): Point;
        viewToProject(): Point;

        attach(type: string, callback: Function): void;
        attach(param: Object): void;
        detach(type: string, callback: Function): void;
        detach(param: Object): void;
        fire(type: string, event: Object): void;
        responds(type: string): boolean;

    }

    export class Tool {

        minDistance: number;
        maxDistance: number;
        fixedDistance: number;

        onMouseDown: (event: ToolEvent) => void;
        onMouseDrag: (event: ToolEvent) => void;
        onMouseMove: (event: ToolEvent) => void;
        onMouseUp: (event: ToolEvent) => void;

        onKeyDown: (event: KeyEvent) => void;
        onKeyUp: (event: KeyEvent) => void;

        activate(): void;
        remove(): void;

        attach(type: string, callback: Function): void;
        attach(param: { mousedown?: any; mouseup?: any; mousedrag?: any; mousemove?: any; keydown?: any; keyup?: any; }): void;
        detach(type: string, callback: Function): void;
        detach(param: { mousedown?: any; mouseup?: any; mousedrag?: any; mousemove?: any; keydown?: any; keyup?: any; }): void;
        fire(type: string, event: Object): void;
        responds(type: string): boolean;

    }

    export class Event {

        modifiers: Object;

    }

    export class ToolEvent extends Event {

        type: string;
        point: Point;
        lastPoint: Point;
        downPoint: Point;
        middlePoint: Point;
        delta: Point;
        count: number;
        item: Item;

        toString(): string;

    }

    export class Palette {

        reset(): void;

    }

    export class Component {

    }

    export class Key {

        static isDown(key: string): boolean;
        
    }

    export class KeyEvent extends Event {

        type: string;
        character: string;
        key: string;

        toString(): string;

    }

    export class TextItem extends Item {

        content: string;

        fontFamily: string;
        fontWeight: any;
        fontSize: any;
        leading: any;

        justification: string;

    }

    export class PointText extends TextItem {

        constructor(point: Point);
        constructor(object: Object);

        point: Point;

    }

}
