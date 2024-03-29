import { useState, useEffect } from "react"

function DayOfMonth() {
    const [month, setMonth] = useState()
    const [year, setYear] = useState()
    const [DaysInMonth, setDaysInMonth] = useState(0)

    // tính số ngày
    useEffect(() => {
        const getNumberOfDayInMonths = () => {
            const days = new Date(year, month, 0).getDate()
            setDaysInMonth(days)
        }
        getNumberOfDayInMonths()
    }, [year, month])
    // giới hạn 12 tháng
    const handleClickMonths = (e) => {
        const newMonth = parseInt(e.target.value)
        if (newMonth => 1 && newMonth <= 12) {
            setMonth(newMonth)
        }
    }
    return (
        <div class="container">
            <h3>Tính số ngày trong tháng</h3>
            <div class="input-group">
                <label>Tháng : </label>
                <input type="number" value={month} min={1} max={12} onChange={handleClickMonths} />
            </div>
            <div class="input-group">
                <label>Năm : </label>
                <input type="number" value={year} onChange={(e) => setYear(parseInt(e.target.value))} />
            </div>
            <div class="result">
                <h3>Số ngày trong tháng là :</h3>
                <span>{DaysInMonth} ngày</span>
            </div>
        </div>
    )

}


export default DayOfMonth