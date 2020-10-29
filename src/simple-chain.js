const CustomError = require("../extensions/custom-error");

const chainMaker = {
  currentArray: [],
    getLength() {
      return this.currentArray.length;
    },
    addLink(value) { 
        if (value === '') {
          this.currentArray.push(`(  )`);
        } 
        this.currentArray.push(`( ${value} )`);
        return this;
    },
    removeLink(position) {
      if (typeof(position) !== "number") {
        this.currentArray = [];
        throw new Error();
      } else {
        this.currentArray = this.currentArray.slice(0, position - 1).concat(this.currentArray.slice(position)); 
        return this;
      }      
    },
    reverseChain() {
      this.currentArray = this.currentArray.reverse();
      return this;
    },
    finishChain() { 
      let result = this.currentArray.join('~~');  
      this.currentArray = [];  
      return result;
    }
};

module.exports = chainMaker;