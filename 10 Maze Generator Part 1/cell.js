function Cell(i, j) {

    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];

    this.show = function() {
        var x = this.i * w;
        var y = this.j * w;
        stroke(255);
        if(this.walls[0])
        {line(x, y, x + w, y);}
        if(this.walls[1])
        {line(x + w, y, x + w, y + w);}
        if(this.walls[2])
        {line(x + w, y + w, x, y + w);}
        if(this.walls[3])
        {line(x, y + w, x, y);}
        // noFill();
        // rect(x, y, w, w);//we dont need rect we need walls => line
    }


}