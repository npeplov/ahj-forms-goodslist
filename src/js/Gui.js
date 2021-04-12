/* eslint-disable class-methods-use-this */
export default class Gui {
  constructor() {
    // this.form = document.querySelector('.form form');
    // this.input = this.form.querySelector('input');
    // this.button = this.form.querySelector('button');

    // this.popover = document.querySelector('.popover');
    // this.popoverTitle = document.querySelector('.popover h3');
    // this.popoverBody = document.querySelector('.popover div');

    this.widget = document.querySelector('.widget');
    this.tbody = this.widget.querySelector('tbody');
    this.modal = this.widget.querySelector('.modal');
    this.modalInputs = null;
    this.modalAction = null;
  }

  rowTemplate(id, title, price) {
    return `
    <tr data-id="${id}">
      <td>${title}</td>
      <td>${price}</td>
      <td><span class="edit">✏️</span> <span class="del">✖</span></td>
    </tr>
    `;
  }

  drawRows(goods) {
    this.tbody.innerHTML = '';
    goods.forEach((good) => {
      this.tbody.innerHTML += this.rowTemplate(good.id, good.title, good.price);
    });
  }

  showModal(good, action) {
    this.modal.classList.add('center');
    this.modal.classList.remove('hidden');
    this.modal.innerHTML = `
    <form action="submit" name="${action}">
      <div>
        Name<input name="title" type="text" value="${good.title}">
      </div>
      <div>
        Price<input name="price" type="text" value="${good.price}">
      </div>
      <div>
        <button type="submit" name="save">Save</button>
        <button type="reset" name="cancel">Cancel</button>
      </div>
    </form>
    `;
    this.modalInputs = [...this.modal.querySelectorAll('input')];
    this.modalAction = action;
  }

  hideModal() {
    this.modal.classList.remove('center');
    this.modal.classList.add('hidden');
  }
}
