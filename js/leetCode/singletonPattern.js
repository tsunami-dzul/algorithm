function Singleton(name) {
    this.count = 0;

    this.getCount = function() {
        console.log(name, this.count);
    }

    // this.increment = function() {
    //     count += 1;
    // }

    Singleton.prototype.instance = function(type) {
        this.count += 1;
        console.log(`${name}, ${type} = ${this.count}`);
    }
}


const s1 = new Singleton('s1');
const s2 = new Singleton('s2');
const s3 = new Singleton('s3');

s1.instance('s1');
s1.getCount('s1');

s2.instance('s2');
s2.getCount('s2');

// const s2 = new Singleton();
// s2.instance();
// s2.getCount();
