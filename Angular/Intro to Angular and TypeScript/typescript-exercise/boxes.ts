class Box<T> {
    public element: T  | undefined;
    private boxes: Array<T> = [];
 

    public add(element: T):void {
        this.boxes.push(element);
    }

    public remove():void {
        this.boxes.pop();
    } 

    get count():number {
        return this.boxes.length;
    }
}

let box = new Box<String>();
 
box.add("Peter");

box.add("George");

console.log(box.count); 

box.remove(); console.log(box.count);