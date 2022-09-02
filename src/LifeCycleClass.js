import React from "react";

const dataApi = [
  {
    name: "Samsung A50",
    price: 2000000,
    color: "Blue",
  },
  {
    name: "Iphone 13 Pro Max",
    price: 20000000,
    color: "Blue",
  },
  {
    name: "Vivo Y12",
    price: 500000,
    color: "Blue",
  },
];

export default class LifeCycleClass extends React.Component {
  constructor() {
    super();

    this.state = {
      totalPrice: 0,
      products: [],
      carts: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.carts.length !== this.state.carts.length) {
      let totalHarga = 0;
      for (const cart of this.state.carts) {
        totalHarga = totalHarga + cart.price;
      }
      this.setState({ totalPrice: totalHarga });
    }
  }

  componentDidMount() {
    this.setState({ products: dataApi });
  }

  tambahKeranjang(product) {
    const keranjangSekarang = [...this.state.carts];
    keranjangSekarang.push(product);
    this.setState({ carts: keranjangSekarang });
  }

  deleteKeranjang(dataDelete) {
    const keranjangSekarang = [...this.state.carts];
    keranjangSekarang.splice(keranjangSekarang.indexOf(dataDelete), 1);
    this.setState({ carts: keranjangSekarang });
  }

  render() {
    return (
      <>
        <h1>Daftar Keranjang</h1>
        <p>Total Belanja</p>
        <h2>{this.state.totalPrice}</h2>
        <ul>
          {this.state.carts.map((cart) => (
            <li>
              <p>{cart.name}</p>
              <p>{cart.color}</p>
              <h5>{cart.price}</h5>
              <button onClick={() => this.deleteKeranjang(cart)}>
                Hapus Data
              </button>
            </li>
          ))}
        </ul>
        <h1>Daftar Produk</h1>
        <ul>
          {this.state.products.map((product) => (
            <li>
              <p>{product.name}</p>
              <p>{product.color}</p>
              <h5>{product.price}</h5>
              <button onClick={() => this.tambahKeranjang(product)}>
                Tambah Keranjang
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
