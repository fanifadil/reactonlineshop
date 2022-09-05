import { useEffect, useState } from "react";

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

export default function LifeCycleFunction() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function tambahkanKeranjang(produkYangAkanDitambahkan) {
    const keranjangSekarang = [...carts];
    keranjangSekarang.push(produkYangAkanDitambahkan);
    setCarts(keranjangSekarang);
  }

  function deleteKeranjang(indexYgAkanDihapus) {
    const keranjangSekarang = [...carts];
    keranjangSekarang.splice(indexYgAkanDihapus, 1);
    setCarts(keranjangSekarang);
  }

  useEffect(() => {
    setProducts(dataApi);
  }, []);

  useEffect(() => {
    let countTotalPrice = 0;

    for (const cart of carts) {
      countTotalPrice = countTotalPrice + cart.price;
    }

    setTotalPrice(countTotalPrice);
  }, [carts]);

  return (
    <>
      <p>total harga: {totalPrice}</p>
      <h4>Daftar Keranjang:</h4>
      <ul>
        {carts.map((cart, keyCart) => (
          <li key={keyCart}>
            <p>{cart.name}</p>
            <p>{cart.color}</p>
            <h5>{cart.price}</h5>
            <button onClick={() => deleteKeranjang(keyCart)}>Hapus Data</button>
          </li>
        ))}
      </ul>
      <h4>Daftar Produk:</h4>
      <ul>
        {products.map((product, productIndex) => (
          <li key={productIndex}>
            <p>{product.name}</p>
            <p>{product.color}</p>
            <h5>{product.price}</h5>
            <button onClick={() => tambahkanKeranjang(product)}>
              Tambah Keranjang
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
