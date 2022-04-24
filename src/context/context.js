import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();
let data = [
  {
    img: "https://bit.ly/dan-abramov",
    name: "test1",
    position: "test title 1",
    role: "job 1",
    present: "present",
    office : "my office",
    date:"10/04/1995",
    manager : "mohamed tarek",
    fromhome : true
  },
  {
    img: "https://bit.ly/dan-abramov",
    name: "test1",
    position: "test title 1",
    role: "job 1",
    present: "present",
    office : "my office",
    date:"10/04/1995",
    manager : "mohamed tarek",
    fromhome : true
  },
  {
    img: "https://bit.ly/dan-abramov",
    name: "test1",
    position: "test title 1",
    role: "job 1",
    present: "present",
    office : "my office",
    date:"10/04/1995",
    manager : "mohamed tarek",
    fromhome : true
  },
  {
    img: "https://bit.ly/dan-abramov",
    name: "test1",
    position: "test title 1",
    role: "job 1",
    present: "present",
    office : "my office",
    date:"10/04/1995",
    manager : "mohamed tarek",
    fromhome : true
  },{
    img: "https://bit.ly/dan-abramov",
    name: "test1",
    position: "test title 1",
    role: "job 1",
    present: "present",
    office : "my office",
    date:"10/04/1995",
    manager : "mohamed tarek",
    fromhome : true
  },
  {
    img: "https://bit.ly/dan-abramov",
    name: "test1",
    position: "test title 1",
    role: "job 1",
    present: "present",
    office : "my office",
    date:"10/04/1995",
    manager : "mohamed tarek",
    fromhome : true
  },
  {
    img: "https://bit.ly/dan-abramov",
    name: "test1",
    position: "test title 1",
    role: "job 1",
    present: "present",
    office : "my office",
    date:"10/04/1995",
    manager : "mohamed tarek",
    fromhome : true
  },
  {
    img: "https://bit.ly/dan-abramov",
    name: "test1",
    position: "test title 1",
    role: "job 1",
    present: "present",
    office : "my office",
    date:"10/04/1995",
    manager : "mohamed tarek",
    fromhome : true
  },
  {
    img: "https://bit.ly/dan-abramov",
    name: "test1",
    position: "test title 1",
    role: "job 1",
    present: "present",
    office : "my office",
    date:"10/04/1995",
    manager : "mohamed tarek",
    fromhome : true
  },
  {
    img: "https://bit.ly/dan-abramov",
    name: "test1",
    position: "test title 1",
    role: "job 1",
    present: "present",
    office : "my office",
    date:"10/04/1995",
    manager : "mohamed tarek",
    fromhome : true
  },
  {
    img: "https://bit.ly/dan-abramov",
    name: "test1",
    position: "test title 1",
    role: "job 1",
    present: "present",
    office : "my office",
    date:"10/04/1995",
    manager : "mohamed tarek",
    fromhome : true
  },
  {
    img: "https://bit.ly/dan-abramov",
    name: "test1",
    position: "test title 1",
    role: "job 1",
    present: "present",
    office : "my office",
    date:"10/04/1995",
    manager : "mohamed tarek",
    fromhome : true
  },
];
const AppProvider = ({ children }) => {
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [phone, setPhone] = useState();
  const [mail, setMail] = useState();
  const [office, setOffice] = useState();
  const [depart, setDepart] = useState();
  const [attend, setAttend] = useState();
  const [role, setRole] = useState();
  const [position, setPosition] = useState();
  const [manager, setManager] = useState();
  const [fromHome, setFromHome] = useState(true);
  const [users, setUsers] = useState(data);



  
  
  return (
    <Context.Provider
      value={{
        img,
        setImg,
        name,
        setName,
        date,
        setDate,
        phone,
        setPhone,
        mail,
        setMail,
        office,
        setOffice,
        depart,
        setDepart,
        attend,
        setAttend,
        position,
        setPosition,
        role,
        setRole,
        manager,
        setManager,
        fromHome,
        setFromHome,
        users,
        setUsers,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const AppState = () => {
  return useContext(Context);
};

export default AppProvider;
