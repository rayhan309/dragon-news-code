import { useLoaderData, useParams } from "react-router";
import Header from "../components/Header";
import Rigth_side from "../components/Rigth_side";
import { useEffect, useState } from "react";
import NewsDitailesCard from "../components/NewsDitailesCard";

const NewsDitailes = () => {

    const newsData = useLoaderData();

    const {id} = useParams();

    const [news, setNews] = useState({})

    useEffect(() => {

        const findData = newsData.find(singleData => singleData.id == id)
        setNews(findData)

    }, [newsData, id])

    return (
        <div>
            <header className="py-4">
                <Header />
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 mt-10 gap-5">
                <section className="col-span-9">
                    <NewsDitailesCard news={news} />
                </section>
                <aside className="col-span-3">
                    <Rigth_side />
                </aside>
            </main>
        </div>
    );
};

export default NewsDitailes;