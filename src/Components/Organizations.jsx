import { useEffect, useState } from 'react';
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FaDonate } from 'react-icons/fa';

const Organizations = ({userlog, setrecipient}) => {
    const [Data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const [showless, setshowless] = useState(true);

    const nextIndex = () => {
        if (index < Data.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };

    const prevIndex = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(Data.length - 1);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/org/', {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                });

                if (response.ok) {
                    const data = await response.json();
                    setData(data.data); // Assuming your data has a 'data' property
                    console.log("11111", data)
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    if (Data.length !== 0) {
        const { id, name, phoneNumber, location } = Data[index];
        console.log("11111")

        return (
            <article className="review-org">
                <FaDonate className="shape-img-org" />
                <h4 className="author-org">
                <button onClick={() => {setrecipient(name) }}>{name}</button>

                </h4>
                <p className="price-org">Contact with: {phoneNumber}</p>
                {/* <p className="info-org">
                    <button onClick={() => setshowless(!showless)} className="showless-btn">
                        {showless ? <MdOutlineKeyboardDoubleArrowDown className="showless-btn" /> : <MdOutlineKeyboardDoubleArrowUp className="showless-btn" />}
                    </button>
                </p> */}
                <div className="btn-next-org">
                    <button className="next-org" onClick={nextIndex}>
                        <GrFormPrevious />
                    </button>
                    <button className="next-org" onClick={prevIndex}>
                        <GrFormNext />
                    </button>
                </div>
            </article>
        );
    }

    return null; // You might want to render something else when Data is empty
};

export default Organizations;
