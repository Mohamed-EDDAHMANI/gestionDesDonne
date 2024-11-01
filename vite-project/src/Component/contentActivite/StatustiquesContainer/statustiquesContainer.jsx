import './statustiquesContainer.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import {AreaChart, Area } from 'recharts'



const StatustiquesContainer = ({ActiveStatistiques, ActiveModifier, ActiveCréer}) => {

    const [depData, setDepData] = useState([])
    const [forData, setForData] = useState([])
    const [modData, setModData] = useState([])
    const [ensData, setEnsData] = useState([])
    const [classes, setClasses] = useState([])
    const [etudiant, setEtudiant] = useState([])

    useEffect(() => {
        fetchClasses();
        fetchDepartments();
        fetchModules();
        fetchFormations();
        fetchEnseignant();
        fetchEtudiant();
    }, []);

    const fetchDepartments = () => {
        axios.get('http://localhost:5500/API/departement/get')
            .then((result) => {
                setDepData(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };





    const fetchModules = async () => {
        await axios.get('http://localhost:5500/API/modules/get')
            .then((result) => {
                setModData(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };





    const fetchFormations = async () => {
        await axios.get('http://localhost:5500/API/formation/get')
            .then((result) => {
                setForData(result.data);

            })
            .catch((err) => {
                console.log(err);
            });
    };





    const fetchEnseignant = async () => {
        await axios.get('http://localhost:5500/API/enseignant/get')
            .then((result) => {
                setEnsData(result.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };


    const fetchClasses = () => {
        axios.get('http://localhost:5500/API/classe/get')
            .then((result) => {
                setClasses(result.data)

            })
            .catch((err) => {
                console.log(err);
            });
    };


    const fetchEtudiant = () => {
        axios.get('http://localhost:5500/API/etudiant/get')
            .then((result) => {
                setEtudiant(result.data)
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return(
        ActiveModifier || ActiveCréer ? '' : (
        <div className={ActiveStatistiques ? 'selectedStatustiques' : 'ShowStatustiquesContainer'}>
            <AreaChart width={500} height={400} data={ensData}>

            </AreaChart>
        </div>
        )
    )
}

export default StatustiquesContainer