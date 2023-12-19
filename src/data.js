import home from '../src/assets/home.png'
import profile from '../src/assets/user.png'
import doctor from '../src/assets/doctor.png'
import patient from '../src/assets/medical.png'
import radiologist from '../src/assets/radiologist.png'
import appointment from '../src/assets/schedule.png'
import report from '../src/assets/report.png'
import users from "../src/assets/group.png"

export const menu = [
    {
      id: 1,
      title: "Homepage",
      url: "/dashboard",
      icon: home,
    },
        {
          id: 2,
          title: "Profile",
          url: "/profile",
          icon: profile,
        },
        {
          id: 3,
          title: "Doctors",
          url: "/doctors",
          icon: doctor,
        },
        {
          id: 4,
          title: "Radiologists",
          url: "/radiologists",
          icon: radiologist,
        },
        {
          id: 5,
          title: "Patients",
          url: "/patients",
          icon: patient,
        },
        {
          id: 6,
          title: "Appointments",
          url: "/appointments",
          icon: appointment,
        },
  ];
  
  export const recentReports = [
    {
      id: 1,
      img: "https://firebasestorage.googleapis.com/v0/b/point-of-care-462b2.appspot.com/o/Hashir%20Hamid?alt=media&token=3ce02206-dc7e-4ce0-84ea-7ffaef8edf5a",
      name: "Hashir Hamid",
      email: "hashirhamid20@gmail.com",
      category: "Chest",
    },
    {
      id: 2,
      img: "https://firebasestorage.googleapis.com/v0/b/point-of-care-462b2.appspot.com/o/Aliza%20Tanweer?alt=media&token=08015032-12a8-46ff-b13f-792cd3c6ef42",
      name: "Aliza Tanweer",
      email: "alizatanweer123@gmail.com",
      category: "Chest",
    },
    {
      id: 3,
      img: "https://firebasestorage.googleapis.com/v0/b/point-of-care-462b2.appspot.com/o/Aaiza%20Irfan?alt=media&token=2a8a8171-6f4c-47a3-845a-ab8d20b00b7c",
      name: "Aaiza Irfan",
      email: "aaizairfan@gmail.com",
      category: "Chest",
    },
    {
      id: 4,
      img: "https://firebasestorage.googleapis.com/v0/b/point-of-care-462b2.appspot.com/o/Hammad%20Tufail?alt=media&token=9330cf8c-6a93-41c6-b3a6-eb0f7e51ece5",
      name: "Hammad Tufail",
      email: "hammadtufail@gmail.com",
      category: "Chest",
    },
    
  ];
  
  export const chartBoxUser = {
    color: "#8884d8",
    icon: users,
    title: "Total Users",
    number: "8",
    dataKey: "users",
    percentage: 100,
    chartData: [
      { name: "Sun", users: 2 },
      { name: "Mon", users: 0 },
      { name: "Tue", users: 2 },
      { name: "Wed", users: 1 },
      { name: "Thu", users: 1 },
      { name: "Fri", users: 2 },
      { name: "Sat", users: 0 },
    ],
  };
  
  export const chartBoxDoctor = {
    color: "skyblue",
    icon: doctor,
    title: "Doctors",
    number: "1",
    dataKey: "doctors",
    percentage: 20,
    chartData: [
      { name: "Sun", doctors: 0 },
      { name: "Mon", doctors: 0 },
      { name: "Tue", doctors: 0 },
      { name: "Wed", doctors: 1 },
      { name: "Thu", doctors: 0 },
      { name: "Fri", doctors: 0 },
      { name: "Sat", doctors: 0 },
    ],
  };
  export const chartBoxPatient = {
    color: "teal",
    icon: patient,
    title: "Patients",
    number: "2",
    dataKey: "patients",
    percentage: 40,
    chartData: [
      { name: "Sun", patients: 1 },
      { name: "Mon", patients: 0 },
      { name: "Tue", patients: 0 },
      { name: "Wed", patients: 1 },
      { name: "Thu", patients: 0 },
      { name: "Fri", patients: 0 },
      { name: "Sat", patients: 0 },
    ],
  };
  export const chartBoxRadiologist = {
    color: "gold",
    icon: radiologist,
    title: "Radiologists",
    number: "2",
    dataKey: "radiologists",
    percentage: 40,
    chartData: [
      { name: "Sun", radiologists: 0 },
      { name: "Mon", radiologists: 0 },
      { name: "Tue", radiologists: 0 },
      { name: "Wed", radiologists: 2 },
      { name: "Thu", radiologists: 0 },
      { name: "Fri", radiologists: 0 },
      { name: "Sat", radiologists: 0 },
    ],
  };
  
 
  
  export const barChartBoxVisit = {
    title: "Weekly Appointments",
    color: "#088F8F",
    dataKey: "appointments",
    chartData: [
      {
        name: "Sun",
        appointments: 3,
      },
      {
        name: "Mon",
        appointments: 1,
      },
      {
        name: "Tue",
        appointments: 2,
      },
      {
        name: "Wed",
        appointments: 1,
      },
      {
        name: "Thu",
        appointments: 4,
      },
      {
        name: "Fri",
        appointments: 1,
      },
      {
        name: "Sat",
        appointments: 2,
      },
    ],
  };
  

  export const reportRows = [
    {
      _id: 1,
      patientName: "Kulsoom Khurshid",
      email: "Kulsoomkhurshid26@gmail.com",
      contact: "0332-5316694",
      gender: "Female",
      age: "45 years old",
      result: "Pneumonia",
      percentage: "96%",
      time: "5:30 P.M",
      date: "23-11-2023"
    },
    {
      _id: 2,
      patientName: "Kulsoom Khurshid",
      email: "Kulsoomkhurshid26@gmail.com",
      contact: "0332-5316694",
      gender: "Female",
      age: "45 years old",
      result: "Pneumonia",
      percentage: "96%",
      time: "5:30 P.M",
      date: "23-11-2023"
    },
    {
      _id: 3,
      patientName: "Kulsoom Khurshid",
      email: "Kulsoomkhurshid26@gmail.com",
      contact: "0332-5316694",
      gender: "Female",
      age: "45 years old",
      result: "Pneumonia",
      percentage: "96%",
      time: "5:30 P.M",
      date: "23-11-2023"
    },
    {
      _id: 4,
      patientName: "Kulsoom Khurshid",
      email: "Kulsoomkhurshid26@gmail.com",
      contact: "0332-5316694",
      gender: "Female",
      age: "45 years old",
      result: "Pneumonia",
      percentage: "96%",
      time: "5:30 P.M",
      date: "23-11-2023"
    },
    {
      _id: 5,
      patientName: "Kulsoom Khurshid",
      email: "Kulsoomkhurshid26@gmail.com",
      contact: "0332-5316694",
      gender: "Female",
      age: "45 years old",
      result: "Pneumonia",
      percentage: "96%",
      time: "5:30 P.M",
      date: "23-11-2023"
    },
    {
      _id: 6,
      patientName: "Kulsoom Khurshid",
      email: "Kulsoomkhurshid26@gmail.com",
      contact: "0332-5316694",
      gender: "Female",
      age: "45 years old",
      result: "Pneumonia",
      percentage: "96%",
      time: "5:30 P.M",
      date: "23-11-2023"
    },
    {
      _id: 7,
      patientName: "Kulsoom Khurshid",
      email: "Kulsoomkhurshid26@gmail.com",
      contact: "0332-5316694",
      gender: "Female",
      age: "45 years old",
      result: "Pneumonia",
      percentage: "96%",
      time: "5:30 P.M",
      date: "23-11-2023"
    },
  ];
  
  
  
  