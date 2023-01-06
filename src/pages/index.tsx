import { Paper } from "@mantine/core";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import AddBudget from "../components/AddBudget";
import History from "../components/History";
import Totals from "../components/Totals";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>PEASANT</title>
      </Head>
      <Paper className="nav sticky top-0 z-50 w-screen   text-center">
        <p className="  text-2xl font-bold">Peasant Budget</p>
      </Paper>
      <section className="main  w-screen ">
        <section className="">
          <AddBudget />
        </section>
        <section className="totals text-center">
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
