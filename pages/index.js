const Home = (props) => {
  console.log(props)
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export default Home;

export async function getStaticProps(context) {
  const buildDate = new Date();
  return {
    props: {
      "build-date": `${buildDate.getMinutes()} ${buildDate.getSeconds()}`
    },
  }
}