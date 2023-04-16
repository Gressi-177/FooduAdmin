import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Row,
  Table,
} from "reactstrap";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../src/config/firebase";
import { deleteUser } from "../../../src/services/users";
import { error } from "next/dist/build/output/log";

const UserTable = () => {
  const [DataList, setDataList] = useState([]);

  useEffect(() => {
    return onSnapshot(collection(db, "users"), (snapshot) => {
      // Dùng onSnapshot để lấy dữ liệu realtime từ collection "users"
      let users = [];
      snapshot.forEach((doc) => {
        // Lặp qua từng document để lấy dữ liệu
        users.push({ id: doc.id, ...doc.data() });
      });
      setDataList(users);
    });
  }, []);

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">User Listing</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Overview of the users
        </CardSubtitle>
        <div className="table-responsive">
          <Table className="text-nowrap mt-3 align-middle" bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>FullName</th>
                <th>Email</th>
                <th colSpan={2} className={"text-center"}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {DataList.map((user, index) => (
                <tr key={user.uid}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.fullName}</td>
                  <td>{user.email}</td>

                  <td>
                    <button>
                      <i className="bi bi-pencil-square"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={async () =>
                        await deleteUser(user.uid)
                          .then(() => alert("User successfully deleted!"))
                          .catch((error) => alert(error))
                      }
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};
const ListUsers = () => {
  return (
    <Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* table-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Col lg="12">
        <UserTable />
      </Col>
    </Row>
  );
};

export default ListUsers;
