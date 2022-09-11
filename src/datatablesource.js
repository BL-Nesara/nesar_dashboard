export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img src={params.row.img} alt="" className="cellImg" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temproary data
export const userRows = [
  {
    id: 1,
    username: "Naveen",
    img: "https://images.pexels.com/photos/13096525/pexels-photo-13096525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "snow@gmail.com",
    age: 25,
  },
  {
    id: 2,
    username: "Goro",
    img: "https://images.pexels.com/photos/13096525/pexels-photo-13096525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "passive",
    email: "goro@gmail.com",
    age: 25,
  },
  {
    id: 3,
    username: "Abhi",
    img: "https://images.pexels.com/photos/13096525/pexels-photo-13096525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "passive",
    email: "abhi@gmail.com",
    age: 26,
  },
  {
    id: 4,
    username: "Vicky",
    img: "https://images.pexels.com/photos/13096525/pexels-photo-13096525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "pending",
    email: "vicky@gmail.com",
    age: 26,
  },
  {
    id: 5,
    username: "Nithin",
    img: "https://images.pexels.com/photos/13096525/pexels-photo-13096525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "nithin@gmail.com",
    age: 24,
  },
  {
    id: 6,
    username: "Nishanth",
    img: "https://images.pexels.com/photos/13096525/pexels-photo-13096525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "pending",
    email: "nishanth@gmail.com",
    age: 24,
  },
  {
    id: 7,
    username: "Teju",
    img: "https://images.pexels.com/photos/13096525/pexels-photo-13096525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "passive",
    email: "teju@gmail.com",
    age: 21,
  },
  {
    id: 8,
    username: "Suhas",
    img: "https://images.pexels.com/photos/13096525/pexels-photo-13096525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "pending",
    email: "suhas@gmail.com",
    age: 25,
  },
  {
    id: 9,
    username: "Raj",
    img: "https://images.pexels.com/photos/13096525/pexels-photo-13096525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "raj@gmail.com",
    age: 30,
  },
  {
    id: 10,
    username: "Chintu",
    img: "https://images.pexels.com/photos/13096525/pexels-photo-13096525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    status: "active",
    email: "chintu@gmail.com",
    age: 26,
  },
];
