/* eslint-disable no-case-declarations */
/* eslint-disable no-console */
export default class Logic {
  constructor(gui) {
    this.gui = gui;
    this.modalControl = this.modalControl.bind(this);
    this.listControl = this.listControl.bind(this);
    this.ind = null;
    this.goods = [
      {
        id: 111,
        title: 'IPhone XR',
        price: 60000,
      },
      {
        id: 112,
        title: 'Geforce 3090',
        price: 300000,
      },
      {
        id: 113,
        title: 'Macbook M1',
        price: 200000,
      },
    ];
    this.id = 114;
  }

  init() {
    this.gui.drawRows(this.goods);
    this.gui.widget.addEventListener('click', this.listControl);
    this.gui.modal.addEventListener('click', this.modalControl);
  }

  modalControl(e) {
    if (e) e.preventDefault();
    if (e.target.name === 'cancel') {
      this.gui.hideModal();
    } else if (e.target.name === 'save') {
      const title = this.gui.modalInputs[0].value;
      const price = this.gui.modalInputs[1].value;
      if (this.gui.modalAction === 'add') {
        this.goods.push({ id: this.id, title, price });
      } else if (this.gui.modalAction === 'edit') {
        this.goods[this.ind].title = title;
        this.goods[this.ind].price = price;
      }
      this.gui.hideModal();
    }
  }

  listControl(e) {
    const action = e.target.className;

    if (e.target.closest('tr')) {
      const { id } = e.target.closest('tr').dataset;
      this.ind = this.goods.findIndex((good) => good.id === +id);
    }

    switch (action) {
      case 'del':
        this.goods.splice(this.ind, 1);
        break;
      case 'edit':
        this.gui.showModal(this.goods[this.ind], 'edit');
        break;
      case 'add':
        this.gui.showModal({ title: '', price: '' }, 'add');
        break;
      default:
        break;
    }

    this.gui.drawRows(this.goods);
  }
}
