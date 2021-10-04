import { useEffect, useState } from "react";

const useTeams = () => {
    const[teams, setTeams] = useState([]);

    useEffect(()=>{
        fetch('./team.json')
        .then(res => res.json())
        .then(data => setTeams(data));
    },[])

    return [teams];
}

export default useTeams;