import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { config } from "../config/config";

const SEO = () => {
    const initialState = "Carpe Diem Skills Academy - CDSA365";
    const [title, setTitle] = useState(initialState);
    const [description, setDescription] = useState(initialState);
    const [keyword, setKeyword] = useState(initialState);

    const getSeoData = () => {
        axios
            .get(config.api.getSeoData)
            .then(({ data }) => {
                if (data.length) {
                    const title = data.find((x) => x.type === "title");
                    const desc = data.find((x) => x.type === "description");
                    const keyword = data.find((x) => x.type === "keyword");
                    if (title) setTitle(title.content);
                    if (desc) setDescription(desc.content);
                    if (keyword) setKeyword(keyword.content);
                }
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getSeoData();
    }, []);

    return (
        <Helmet defaultTitle="Carpe Diem Skills Academy - CDSA365">
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keyword} />
            <link rel="canonical" href="https://cdsa365.com" />
        </Helmet>
    );
};

export default SEO;
