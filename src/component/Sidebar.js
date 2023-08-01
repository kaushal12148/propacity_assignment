import React, { useState } from 'react';
import styles from "./styleSheet/sidebar.module.css";
import { NavLink } from 'react-router-dom';


export default function Sidebar() {
    const [filmsSelected,setFilmsSelected]=useState(false)
    const [peopleSelected,setPeopleSelected]=useState(false)
    const [planetsSelected,setPlanetsSelected]=useState(false)
    const [speciesSelected,setSpeciesSelected]=useState(false)
    const [starshipsSelected,setStarshipsSelected]=useState(false)
    const [vehiclesSelected,setVehiclesSelected]=useState(false)

    function setFilms() {
        setFilmsSelected(true);
        setPeopleSelected(false);
        setPlanetsSelected(false);
        setSpeciesSelected(false);
        setStarshipsSelected(false);
        setVehiclesSelected(false);
    }

    function setPeople() {
        setFilmsSelected(false);
        setPeopleSelected(true);
        setPlanetsSelected(false);
        setSpeciesSelected(false);
        setStarshipsSelected(false);
        setVehiclesSelected(false);
    }

    function setPlanets() {
        setFilmsSelected(false);
        setPeopleSelected(false);
        setPlanetsSelected(true);
        setSpeciesSelected(false);
        setStarshipsSelected(false);
        setVehiclesSelected(false);
    }

    function setSpecies() {
        setFilmsSelected(false);
        setPeopleSelected(false);
        setPlanetsSelected(false);
        setSpeciesSelected(true);
        setStarshipsSelected(false);
        setVehiclesSelected(false);
    }

    function setStarships() {
        setFilmsSelected(false);
        setPeopleSelected(false);
        setPlanetsSelected(false);
        setSpeciesSelected(false);
        setStarshipsSelected(true);
        setVehiclesSelected(false);
    }

    function setVehicles() {
        setFilmsSelected(false);
        setPeopleSelected(false);
        setPlanetsSelected(false);
        setSpeciesSelected(false);
        setStarshipsSelected(false);
        setVehiclesSelected(true);
    }

    return (
      <div className={styles.container}>

   
      <NavLink className={styles.nav}  to="./films">
        <div className={styles.main} style={filmsSelected?{backgroundColor:'#CB1A80'}:{backgroundColor:'transparent'}} onClick={setFilms}>
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
               <path d="M15.1875 5.0625H9.18773L7.23656 3.6C7.04221 3.45424 6.8059 3.3753 6.56297 3.375H2.8125C2.51413 3.375 2.22798 3.49353 2.017 3.7045C1.80603 3.91548 1.6875 4.20163 1.6875 4.5V14.0625C1.6875 14.3609 1.80603 14.647 2.017 14.858C2.22798 15.069 2.51413 15.1875 2.8125 15.1875H15.2501C15.5317 15.1871 15.8018 15.0751 16.0009 14.8759C16.2001 14.6768 16.3121 14.4067 16.3125 14.1251V6.1875C16.3125 5.88913 16.194 5.60298 15.983 5.392C15.772 5.18103 15.4859 5.0625 15.1875 5.0625Z" fill="white"/>
             </svg>
             <p className={styles.p}>Films</p>
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
               <path d="M12.773 9.39798L7.14798 15.023C7.09571 15.0752 7.03367 15.1167 6.96539 15.145C6.8971 15.1733 6.82392 15.1878 6.75001 15.1878C6.6761 15.1878 6.60291 15.1733 6.53463 15.145C6.46634 15.1167 6.4043 15.0752 6.35204 15.023C6.29978 14.9707 6.25832 14.9087 6.23004 14.8404C6.20175 14.7721 6.18719 14.6989 6.18719 14.625C6.18719 14.5511 6.20175 14.4779 6.23004 14.4096C6.25832 14.3413 6.29978 14.2793 6.35204 14.227L11.5798 9.00001L6.35204 3.77298C6.24649 3.66743 6.18719 3.52427 6.18719 3.37501C6.18719 3.22574 6.24649 3.08259 6.35204 2.97704C6.45759 2.87149 6.60074 2.81219 6.75001 2.81219C6.89927 2.81219 7.04243 2.87149 7.14798 2.97704L12.773 8.60204C12.8253 8.65428 12.8668 8.71632 12.8951 8.7846C12.9234 8.85289 12.9379 8.92609 12.9379 9.00001C12.9379 9.07393 12.9234 9.14713 12.8951 9.21541C12.8668 9.2837 12.8253 9.34574 12.773 9.39798Z" fill="white"/>
             </svg>
          </div>
      </NavLink>
         
      <NavLink className={styles.nav} to='./people' >
          <div className={styles.main} style={peopleSelected?{backgroundColor:'#CB1A80'}:{backgroundColor:'transparent'}} onClick={setPeople}>
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
               <path d="M15.1875 5.0625H9.18773L7.23656 3.6C7.04221 3.45424 6.8059 3.3753 6.56297 3.375H2.8125C2.51413 3.375 2.22798 3.49353 2.017 3.7045C1.80603 3.91548 1.6875 4.20163 1.6875 4.5V14.0625C1.6875 14.3609 1.80603 14.647 2.017 14.858C2.22798 15.069 2.51413 15.1875 2.8125 15.1875H15.2501C15.5317 15.1871 15.8018 15.0751 16.0009 14.8759C16.2001 14.6768 16.3121 14.4067 16.3125 14.1251V6.1875C16.3125 5.88913 16.194 5.60298 15.983 5.392C15.772 5.18103 15.4859 5.0625 15.1875 5.0625Z" fill="white"/>
             </svg>
             <p className={styles.p}>People</p>
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
               <path d="M12.773 9.39798L7.14798 15.023C7.09571 15.0752 7.03367 15.1167 6.96539 15.145C6.8971 15.1733 6.82392 15.1878 6.75001 15.1878C6.6761 15.1878 6.60291 15.1733 6.53463 15.145C6.46634 15.1167 6.4043 15.0752 6.35204 15.023C6.29978 14.9707 6.25832 14.9087 6.23004 14.8404C6.20175 14.7721 6.18719 14.6989 6.18719 14.625C6.18719 14.5511 6.20175 14.4779 6.23004 14.4096C6.25832 14.3413 6.29978 14.2793 6.35204 14.227L11.5798 9.00001L6.35204 3.77298C6.24649 3.66743 6.18719 3.52427 6.18719 3.37501C6.18719 3.22574 6.24649 3.08259 6.35204 2.97704C6.45759 2.87149 6.60074 2.81219 6.75001 2.81219C6.89927 2.81219 7.04243 2.87149 7.14798 2.97704L12.773 8.60204C12.8253 8.65428 12.8668 8.71632 12.8951 8.7846C12.9234 8.85289 12.9379 8.92609 12.9379 9.00001C12.9379 9.07393 12.9234 9.14713 12.8951 9.21541C12.8668 9.2837 12.8253 9.34574 12.773 9.39798Z" fill="white"/>
             </svg>
          </div>
       </NavLink>
          
          <NavLink className={styles.nav} to="planets">
          <div className={styles.main} style={planetsSelected?{backgroundColor:'#CB1A80'}:{backgroundColor:'transparent'}} onClick={setPlanets}>
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
               <path d="M15.1875 5.0625H9.18773L7.23656 3.6C7.04221 3.45424 6.8059 3.3753 6.56297 3.375H2.8125C2.51413 3.375 2.22798 3.49353 2.017 3.7045C1.80603 3.91548 1.6875 4.20163 1.6875 4.5V14.0625C1.6875 14.3609 1.80603 14.647 2.017 14.858C2.22798 15.069 2.51413 15.1875 2.8125 15.1875H15.2501C15.5317 15.1871 15.8018 15.0751 16.0009 14.8759C16.2001 14.6768 16.3121 14.4067 16.3125 14.1251V6.1875C16.3125 5.88913 16.194 5.60298 15.983 5.392C15.772 5.18103 15.4859 5.0625 15.1875 5.0625Z" fill="white"/>
             </svg>
             <p className={styles.p}>Planets</p>
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
               <path d="M12.773 9.39798L7.14798 15.023C7.09571 15.0752 7.03367 15.1167 6.96539 15.145C6.8971 15.1733 6.82392 15.1878 6.75001 15.1878C6.6761 15.1878 6.60291 15.1733 6.53463 15.145C6.46634 15.1167 6.4043 15.0752 6.35204 15.023C6.29978 14.9707 6.25832 14.9087 6.23004 14.8404C6.20175 14.7721 6.18719 14.6989 6.18719 14.625C6.18719 14.5511 6.20175 14.4779 6.23004 14.4096C6.25832 14.3413 6.29978 14.2793 6.35204 14.227L11.5798 9.00001L6.35204 3.77298C6.24649 3.66743 6.18719 3.52427 6.18719 3.37501C6.18719 3.22574 6.24649 3.08259 6.35204 2.97704C6.45759 2.87149 6.60074 2.81219 6.75001 2.81219C6.89927 2.81219 7.04243 2.87149 7.14798 2.97704L12.773 8.60204C12.8253 8.65428 12.8668 8.71632 12.8951 8.7846C12.9234 8.85289 12.9379 8.92609 12.9379 9.00001C12.9379 9.07393 12.9234 9.14713 12.8951 9.21541C12.8668 9.2837 12.8253 9.34574 12.773 9.39798Z" fill="white"/>
             </svg>
          </div>
          </NavLink>
  
          <NavLink className={styles.nav} to="species">  
          <div className={styles.main} style={speciesSelected?{backgroundColor:'#CB1A80'}:{backgroundColor:'transparent'}} onClick={setSpecies}>
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
               <path d="M15.1875 5.0625H9.18773L7.23656 3.6C7.04221 3.45424 6.8059 3.3753 6.56297 3.375H2.8125C2.51413 3.375 2.22798 3.49353 2.017 3.7045C1.80603 3.91548 1.6875 4.20163 1.6875 4.5V14.0625C1.6875 14.3609 1.80603 14.647 2.017 14.858C2.22798 15.069 2.51413 15.1875 2.8125 15.1875H15.2501C15.5317 15.1871 15.8018 15.0751 16.0009 14.8759C16.2001 14.6768 16.3121 14.4067 16.3125 14.1251V6.1875C16.3125 5.88913 16.194 5.60298 15.983 5.392C15.772 5.18103 15.4859 5.0625 15.1875 5.0625Z" fill="white"/>
             </svg>
             <p className={styles.p}>Species</p>
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
               <path d="M12.773 9.39798L7.14798 15.023C7.09571 15.0752 7.03367 15.1167 6.96539 15.145C6.8971 15.1733 6.82392 15.1878 6.75001 15.1878C6.6761 15.1878 6.60291 15.1733 6.53463 15.145C6.46634 15.1167 6.4043 15.0752 6.35204 15.023C6.29978 14.9707 6.25832 14.9087 6.23004 14.8404C6.20175 14.7721 6.18719 14.6989 6.18719 14.625C6.18719 14.5511 6.20175 14.4779 6.23004 14.4096C6.25832 14.3413 6.29978 14.2793 6.35204 14.227L11.5798 9.00001L6.35204 3.77298C6.24649 3.66743 6.18719 3.52427 6.18719 3.37501C6.18719 3.22574 6.24649 3.08259 6.35204 2.97704C6.45759 2.87149 6.60074 2.81219 6.75001 2.81219C6.89927 2.81219 7.04243 2.87149 7.14798 2.97704L12.773 8.60204C12.8253 8.65428 12.8668 8.71632 12.8951 8.7846C12.9234 8.85289 12.9379 8.92609 12.9379 9.00001C12.9379 9.07393 12.9234 9.14713 12.8951 9.21541C12.8668 9.2837 12.8253 9.34574 12.773 9.39798Z" fill="white"/>
             </svg>
          </div>
            </NavLink>
  
            <NavLink className={styles.nav} to="starships">
               
              <div className={styles.main} style={starshipsSelected?{backgroundColor:'#CB1A80'}:{backgroundColor:'transparent'}} onClick={setStarships}>
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
               <path d="M15.1875 5.0625H9.18773L7.23656 3.6C7.04221 3.45424 6.8059 3.3753 6.56297 3.375H2.8125C2.51413 3.375 2.22798 3.49353 2.017 3.7045C1.80603 3.91548 1.6875 4.20163 1.6875 4.5V14.0625C1.6875 14.3609 1.80603 14.647 2.017 14.858C2.22798 15.069 2.51413 15.1875 2.8125 15.1875H15.2501C15.5317 15.1871 15.8018 15.0751 16.0009 14.8759C16.2001 14.6768 16.3121 14.4067 16.3125 14.1251V6.1875C16.3125 5.88913 16.194 5.60298 15.983 5.392C15.772 5.18103 15.4859 5.0625 15.1875 5.0625Z" fill="white"/>
              </svg>
              <p className={styles.p}>Starships</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
               <path d="M12.773 9.39798L7.14798 15.023C7.09571 15.0752 7.03367 15.1167 6.96539 15.145C6.8971 15.1733 6.82392 15.1878 6.75001 15.1878C6.6761 15.1878 6.60291 15.1733 6.53463 15.145C6.46634 15.1167 6.4043 15.0752 6.35204 15.023C6.29978 14.9707 6.25832 14.9087 6.23004 14.8404C6.20175 14.7721 6.18719 14.6989 6.18719 14.625C6.18719 14.5511 6.20175 14.4779 6.23004 14.4096C6.25832 14.3413 6.29978 14.2793 6.35204 14.227L11.5798 9.00001L6.35204 3.77298C6.24649 3.66743 6.18719 3.52427 6.18719 3.37501C6.18719 3.22574 6.24649 3.08259 6.35204 2.97704C6.45759 2.87149 6.60074 2.81219 6.75001 2.81219C6.89927 2.81219 7.04243 2.87149 7.14798 2.97704L12.773 8.60204C12.8253 8.65428 12.8668 8.71632 12.8951 8.7846C12.9234 8.85289 12.9379 8.92609 12.9379 9.00001C12.9379 9.07393 12.9234 9.14713 12.8951 9.21541C12.8668 9.2837 12.8253 9.34574 12.773 9.39798Z" fill="white"/>
             </svg>
               </div>
            </NavLink>
  
          
  
  
          <NavLink className={styles.nav} to="vehicles">
             <div className={styles.main} style={vehiclesSelected?{backgroundColor:'#CB1A80'}:{backgroundColor:'transparent'}} onClick={setVehicles}>
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
               <path d="M15.1875 5.0625H9.18773L7.23656 3.6C7.04221 3.45424 6.8059 3.3753 6.56297 3.375H2.8125C2.51413 3.375 2.22798 3.49353 2.017 3.7045C1.80603 3.91548 1.6875 4.20163 1.6875 4.5V14.0625C1.6875 14.3609 1.80603 14.647 2.017 14.858C2.22798 15.069 2.51413 15.1875 2.8125 15.1875H15.2501C15.5317 15.1871 15.8018 15.0751 16.0009 14.8759C16.2001 14.6768 16.3121 14.4067 16.3125 14.1251V6.1875C16.3125 5.88913 16.194 5.60298 15.983 5.392C15.772 5.18103 15.4859 5.0625 15.1875 5.0625Z" fill="white"/>
             </svg>
             <p className={styles.p}>Vehicles</p>
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
               <path d="M12.773 9.39798L7.14798 15.023C7.09571 15.0752 7.03367 15.1167 6.96539 15.145C6.8971 15.1733 6.82392 15.1878 6.75001 15.1878C6.6761 15.1878 6.60291 15.1733 6.53463 15.145C6.46634 15.1167 6.4043 15.0752 6.35204 15.023C6.29978 14.9707 6.25832 14.9087 6.23004 14.8404C6.20175 14.7721 6.18719 14.6989 6.18719 14.625C6.18719 14.5511 6.20175 14.4779 6.23004 14.4096C6.25832 14.3413 6.29978 14.2793 6.35204 14.227L11.5798 9.00001L6.35204 3.77298C6.24649 3.66743 6.18719 3.52427 6.18719 3.37501C6.18719 3.22574 6.24649 3.08259 6.35204 2.97704C6.45759 2.87149 6.60074 2.81219 6.75001 2.81219C6.89927 2.81219 7.04243 2.87149 7.14798 2.97704L12.773 8.60204C12.8253 8.65428 12.8668 8.71632 12.8951 8.7846C12.9234 8.85289 12.9379 8.92609 12.9379 9.00001C12.9379 9.07393 12.9234 9.14713 12.8951 9.21541C12.8668 9.2837 12.8253 9.34574 12.773 9.39798Z" fill="white"/>
             </svg>
            </div>
          </NavLink>
          
  
        
  
  
      </div>
    )
  }
  