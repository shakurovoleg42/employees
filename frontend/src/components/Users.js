// import * as React from "react";
// import Form from 'react-bootstrap/Form';
// import Table from 'react-bootstrap/Table';

// function Users() {
//  const users = {
//   user1_status: true, 
//   user2_status: false, 
//  }
//  return (
//    <div style={{ width: '90vw', marginTop: "100px" }}  className="mx-auto">
//   <Table striped bordered hover variant="dark">
//     <div>
//     </div>
//      <thead >
//        <tr>
//          <th>Id</th>
//          <th>E-mail</th>
//          <th>Last login date</th>
//          <th>Registration date</th>
//          <th>Status</th>
//        </tr>
//      </thead>
//      <Form>
//        <tr>
//          {/* <td>1</td>
//          <td>thorsonodin2003@gmail.com</td>
//          <td>25-25-2356</td>
//          <td>25-25-2356</td> */}
//       <td className={`text-${users.user1_status? "success" : "danger"}`} >{ users.user1_status? "Active" : "Blocked"}</td>
//      </tr>
//      <tr>    
//          <td className={`text-${users.user2_status? "success" : "danger"}`}>{ users.user2_status? "Active" : "Blocked"}</td>
//      </tr>
//      </Form>
//    </Table>
//    </div>
//  );
// }

// export default Users;