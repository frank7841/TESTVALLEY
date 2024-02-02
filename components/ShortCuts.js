import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function ShortCuts() {
    const [shortcutData, setShortcutData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.testvalley.kr/main-shortcut/all');
                const data = await response.json();
                setShortcutData(data);
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, []);

   

    return (
        <div className="flex space-x-2 justify-around mx-20 my-5">
            {shortcutData.map((item) => (
                <div key={item.mainShortcutId}>
                    <div className="">
                        <Image src={item.imageUrl} height={50} width={50} alt={item.imageUrl} />
                        <p>{item.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ShortCuts;
