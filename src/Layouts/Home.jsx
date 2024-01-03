import React from 'react'
import { useState,useEffect } from 'react';
import boy from '../Asssests/boy1.png'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function Home() {

    const data = [
        {
          name: 'Maths',
          Term2: 56,
          Term1: 92,
          amt: 100,
        },
        {
          name: 'English',
          Term2: 86,
          Term1: 53,
          amt: 100,
        },
        {
          name: 'Physics',
          Term2: 92,
          Term1: 72,
          amt: 100,
        },
        {
          name: 'Chemistry',
          Term2: 68,
          Term1: 73,
          amt: 100,
        },
        {
          name: 'Histroy',
          Term2: 82,
          Term1: 93,
          amt: 100,
        },
        {
          name: 'Civics',
          Term2: 48,
          Term1: 89,
          amt: 100,
        },
        {
          name: 'Geography',
          Term2: 99,
          Term1: 72,
          amt: 100,
        },
      ];

      const [attendance, setAttendance] = useState(0);
    const [subjects, setSubjects] = useState(0);
    const [students, setStudents] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Set your final values for attendance, subjects, and students here
            const finalAttendance = 84;
            const finalSubjects = 12;
            const finalStudents = 78;

            // Update the values gradually using intervals
            if (attendance < finalAttendance) {
                setAttendance(prevAttendance => prevAttendance + 1);
            }
            if (subjects < finalSubjects) {
                setSubjects(prevSubjects => prevSubjects + 1);
            }
            if (students < finalStudents) {
                setStudents(prevStudents => prevStudents + 1);
            }
        }, 5); // Interval speed (in milliseconds)

        // Clear the interval once the values reach their final state
        return () => clearInterval(interval);
    }, [attendance, subjects, students]);

     

  return (
    <main className='main-container'>
        <div className='box1'>
          <div className="leftside">
            <h1>Welcome back , Ayush!</h1>
            <p>Always stay updated in your student portal</p>
          </div>
          <div className="rightside">
            <img src={boy} alt="" />
            
          </div>
            
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ATTENDANCE</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>{attendance}%</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>SUBJECTS</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{subjects}</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>STUDENTS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{students}</h1>
            </div>
            
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Term1" fill="#8884d8" />
                <Bar dataKey="Term2" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Term1" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Term2" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home