class A {
  private a: string = '123';
  #b: number = 123;

  method() {
    console.log(this.a, this.#b);
  }
}

interface A {
  readonly a: string;
  b: string;
}

class B implements A {
  private a: string = '123';
  protected b: string = '123';

  method() {
    console.log(this.a);
    console.log(this.b);
  }
}

class C extends B {
  method() {
    console.log(this.a);
    console.log(this.b);
  }
}
new C().a;
new C().b;
