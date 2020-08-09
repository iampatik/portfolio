import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios);

export default new Vuex.Store({
    state: {
        profile: {
            name: "Jan Patrick Tancinco",
            birthday: "October 19, 1999",
            placeOfBirth: "Brgy. Baybay, Carigara, Leyte",
            address: {
                currentAddress: "Talamban, Cebu City",
                permanentAddress: "Brgy. Baybay, Carigara, Leyte",
            },
            educationalAttainment: {
                seniorHighSchool: {
                    school: "Holy Cross College of Carigara",
                    year: "2012 - 2018",
                    course: "ICT"
                },
                college: {
                    school: "University Of San Carlos",
                    year: "2018 - 2020",
                    course: "CCT"
                }

            },
            contacts: {
                email: "janpatrick.tancinco@student.passerellesnumeriques.org",
                skype: "itsmepatweak.Blank",
                mobile: "09122588715",
            },
            skills: {
                microsoftOffice: [
                    "Powerpoint",
                    "Excel",
                    "Word",
                    "NodeJS",
                    "MySQL"
                ],
                programming:
                    [
                        "Java", "C#", "Python", "JavaScript", "HTML", "CSS", "MongoDB",
                    ]
            }
        },
        projects: [
            {
                title: "SpotMe",
                image: "Spotme-logo.png",
                description: "A web application for adventurers who seek beautiful places for memories and experience.",
                status: "Finish",
                framework: "VueJS, NodeJS and MongoDB",
            },
            {
                title: "MediApp",
                image: "redcross.jpg",
                description: "An online selling application where people can buy medicine.",
                status: "Finish",
                framework: "Java and MySQL"
            },
            {
                title: "TamBuy",
                image: "tambuy.jpeg",
                description: "An online store where busy or lazy people can order goods through 'Cash On Delivery'. ",
                status: "Finish",
                framework: "HTML, Bootstrap, Laravel and MySQL",
            },
            // {
            //     title: "TaskShuffler",
            //     image: null,
            //     description: "A web application that shuffles the taskings.",
            //     status: "On going",
            //     framework: "Vue, Laravel and MySQL"
            // },
        ],
        // hobbies: [
        //     {
        //         name: "Basketball",
        //         image: null,
        //         description: "I like playing basketball "
        //     },
        // ],
    },
    getters: {
        projects(state) {
            return state.projects;
        },
        profile(state) {
            return state.profile;
        },
    },
    actions: {

    },
    mutations: {

    },
});