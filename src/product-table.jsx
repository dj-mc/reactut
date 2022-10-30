import React, { useState } from 'react';

const ProductCategoryRow = ({ category }) => {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
};

const ProductRow = ({ product }) => {
  const is_product_in_stock = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: 'red' }}>{product.name}</span>
  );
  return (
    <tr>
      <td>{is_product_in_stock}</td>
      <td>{product.price}</td>
    </tr>
  );
};

const ProductTable = ({ query, in_stock, products }) => {
  const rows = [];
  let last_category = null;

  products.forEach((product) => {
    if (product.name.indexOf(query) === -1) return;
    if (in_stock && !product.stocked) return;

    if (product.category !== last_category) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    last_category = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

const SearchBar = ({
  query,
  in_stock,
  on_query_change,
  on_in_stock_change
}) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search for..."
        value={query}
        onChange={on_query_change}
      />
      <p>
        <input
          type="checkbox"
          checked={in_stock}
          onChange={on_in_stock_change}
        />{' '}
        In Stock
      </p>
    </form>
  );
};

const SearchableProductTable = ({ products }) => {
  const [query, set_query] = useState('');
  const [in_stock, set_in_stock] = useState(false);

  const handle_query_change = (e) => {
    set_query(e.target.value);
  };

  const handle_in_stock_change = (e) => {
    set_in_stock(e.target.checked);
  };

  return (
    <>
      <h2>Searchable Product Table</h2>

      <SearchBar
        query={query}
        in_stock={in_stock}
        on_query_change={handle_query_change}
        on_in_stock_change={handle_in_stock_change}
      />

      <ProductTable products={products} query={query} in_stock={in_stock} />
    </>
  );
};

export { SearchableProductTable };
