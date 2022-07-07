import "./category.css";

function Category({ category }) {
  return (
    <>
      <dl className="category">
        <dt className="ir">Category</dt>
        {category ? (
          category.map((item) => <dd key={item}>{item}</dd>)
        ) : (
          <>
            <dd>Life</dd>
            <dd>Style</dd>
          </>
        )}
      </dl>
    </>
  );
}

export default Category;
