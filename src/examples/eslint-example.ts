class EslintExample {
  list = [1, 2, 3]

  renderList () {
    if (this.list) {
      console.log(this.list)
    }
  }
}

export const eslintExample = new EslintExample()
