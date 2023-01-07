import { Paper } from "@mantine/core";
import { type NextPage } from "next";
import Head from "next/head";

import { useSpeech } from "react-use";
import AddBudget from "../components/AddBudget";
import History from "../components/History";
import Totals from "../components/Totals";

const Home: NextPage = () => {
  const state = useSpeech(
    "Hey poor Kenyan man , welcome to Peasant Budget , we  help you manage your coins",
    { rate: 0.8, pitch: 0.5 }
  );
  return (
    <div className="">
      <Head>
        <title>PEASANT</title>
      </Head>
      <Paper className="nav sticky top-0 z-50 w-screen   text-center">
        <p className="  text-2xl font-bold">Peasant Budget</p>
      </Paper>
      <section className="main  w-screen ">
        <section className=" container mx-auto">
          <AddBudget />
        </section>
        <section className=" container mx-auto flex items-center justify-center">
          <Totals />
        </section>
        <section className="">
          <History />
        </section>
      </section>
    </div>
  );
};

export default Home;
