/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// create context
const StateContext = createContext({
    currentUser: {},
    userToken: null,
    surveys: [],
    setCurrentUser: () => {},
    setUserToken: () => {},
});

const tmpSurveys = [
    {
        id: 1,
        image_url:
            "https://yt3.googleusercontent.com/584JjRp5QMuKbyduM_2k5RlXFqHJtQ0qLIPZpwbUjMJmgzZngHcam5JMuZQxyzGMV5ljwJRl0Q=s176-c-k-c0x00ffffff-no-rj",
        title: "YouTube channel",
        slug: "youtube-channel",
        status: true,
        description:
            "My name is Zura.<br>I am Web Developer with 9+ years of experience, free educational content creator, CTO, Lecturer and father of two wonderful daughters.<br><br>The purpose of the channel is to share my several years of experience with beginner developers.<br>Teach them what I know and make my experience as a lesson for others.",
        created_at: "2022-01-07 13:23:41",
        updated_at: "2022-01-18 16:34:19",
        expire_date: "2022-01-23",
        questions: [
            {
                id: 15,
                type: "text",
                question: "From which country are you?",
                description: null,
            },
            {
                id: 16,
                type: "checkbox",
                question:
                    "Which language videos do you want to see on my channel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
                data: {
                    options: [
                        {
                            uuid: "8ee03188-9e7e-44e5-9176-7574c0beec6f",
                            text: "JavaScript",
                        },
                        {
                            uuid: "fe9497f2-8f05-4c82-9586-26e36736fa9e",
                            text: "PHP",
                        },
                        {
                            uuid: "db0f194c-d32d-4e19-929e-08f7b4e2bcc0",
                            text: "HTML + CSS",
                        },
                        {
                            uuid: "93273c4c-ac8f-432e-b847-e467df64ab9c",
                            text: "All of the above",
                        },
                        {
                            uuid: "d54818a7-ad7e-4b69-9287-16a8dc50a6cb",
                            text: "Everything Zura thinks will be good",
                        },
                    ],
                },
            },
            {
                id: 17,
                type: "select",
                question:
                    "Which PHP framework videos do you want to see on my channel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
                data: {
                    options: [
                        {
                            uuid: "fb907cfe-b7a1-4b24-86fb-03f9c44aa710",
                            text: "Laravel",
                        },
                        {
                            uuid: "e2629262-93ca-4a7a-8129-19c765664a04",
                            text: "Yii2",
                        },
                        {
                            uuid: "9a11a425-d9fe-4fe9-86af-bb814e3d9271",
                            text: "Codeigniter",
                        },
                        {
                            uuid: "484268b1-d3aa-47f8-a185-356ed48e50fe",
                            text: "Symfony",
                        },
                    ],
                },
            },
            {
                id: 18,
                type: "radio",
                question: "Which Laravel Framework do you love most?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
                data: {
                    options: [
                        {
                            uuid: "c02e50e6-5ebf-4344-9822-baa16502dbdb",
                            text: "Laravel 5",
                        },
                        {
                            uuid: "90a15aae-ef4c-4d04-aa05-8e840d4a2ded",
                            text: "Laravel 6",
                        },
                        {
                            uuid: "93c64532-c1eb-4bfd-bd00-ab51cafdee78",
                            text: "Laravel 7",
                        },
                        {
                            uuid: "51f6a704-7a86-47a4-9b2d-72bb026a3371",
                            text: "Laravel 8",
                        },
                    ],
                },
            },
            {
                id: 19,
                type: "checkbox",
                question:
                    "What type of projects do you want to see on my channel built with Laravel?",
                description:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!",
                data: {
                    options: [
                        {
                            uuid: "c5519ab0-3282-4758-a34b-506052bf1342",
                            text: "REST API",
                        },
                        {
                            uuid: "dfbbc0af-8fff-44ae-be36-e85270041729",
                            text: "E-commerce",
                        },
                        {
                            uuid: "6940c122-505f-4d9d-a103-472f923fad94",
                            text: "Real Estate",
                        },
                        {
                            uuid: "2b3c12a4-8f3c-4276-ae59-4e9d55e849be",
                            text: "All of the above",
                        },
                    ],
                },
            },
            {
                id: 22,
                type: "textarea",
                question: "What do you think about TheCodeholic channel?",
                description:
                    "Write your honest opinion. Everything is anonymous.",
                data: [],
            },
            {
                id: 23,
                type: "text",
                question: "Which channel is your favorite one?",
                description: null,
                data: [],
            },
        ],
    },
    {
        id: 2,
        image_url:
            "https://miro.medium.com/v2/resize:fit:1400/1*kxBdslclglg4zgCw0NMIIA.png",
        title: "React",
        slug: "react",
        status: true,
        description:
            "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
        created_at: "2022-01-07 08:50:40",
        updated_at: "2022-01-07 13:37:37",
        expire_date: "2022-02-01",
        questions: [],
    },
    {
        id: 3,
        image_url:
            "data:image/png;base64,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",
        title: "Laravel 9",
        slug: "laravel-9",
        status: true,
        description:
            "Laravel is a web application framework with expressive, elegant syntax. We\u2019ve already laid the foundation \u2014 freeing you to create without sweating the small things.",
        created_at: "2022-01-07 13:28:56",
        updated_at: "2022-01-07 13:28:56",
        expire_date: "2022-01-20",
        questions: [],
    },
];
export const ContextProvider = ({ children }) => {
    // state for current state
    const [currentUser, setCurrentUser] = useState({
        name: "Tom Cook",
        email: "tom@example.com",
        imageUrl:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    });

    // state for user token to controll authentication
    const [userToken, setUserToken] = useState("mytoken");

    // surveys
    const [surveys, setSurveys] = useState([...tmpSurveys]);

    return (
        <StateContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                userToken,
                surveys,
                setUserToken,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
