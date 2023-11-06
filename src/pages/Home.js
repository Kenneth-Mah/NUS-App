import nus_logo from "../nus_logo_full-vertical.jpg"

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <img src={nus_logo} width={250} height={330}/>
            <p>NUS is a leading research university in Asia</p>
        </>
    )
}