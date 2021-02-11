

// let active = 2;
// let items = [];
// for (let number = 1; number <= 5; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }

const PaginationBasic = () => (
    <div className="center">
  <div className="pagination">
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a href="#" class="active">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
  </div>
</div>
);
  
export default PaginationBasic;



