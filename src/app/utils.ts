
/**
 * @param {Array} a items The array containing the items.
 */
export function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
    return a;
}


/**
 * @param {elements} iterable.
 */
export class GetRandom {
  elements: any;
  constructor(elements){
    this.elements = elements.map((n) => n);
  }

  private getRandomIndex(): number {
    return Math.floor(Math.random() * this.elements.length)
  }

  next():any {
    if (this.elements == 0){
      return;
    }
    return this.elements.splice(this.getRandomIndex(), 1)[0];
  }
}
