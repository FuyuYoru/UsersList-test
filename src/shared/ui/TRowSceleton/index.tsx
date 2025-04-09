import { FC } from "react"
import styles from "./index.module.scss";

export const TRowSceleton: FC<{ rowLength: number }> = ({ rowLength }) => {
    return (
        <tr className={styles['table-sceleton_row']}>
            {Array.from({ length: rowLength }).map((_, index) => (
                <td key={index} className={styles['table_sceleton-cell']}>
                        <div className={styles['table_sceleton-cell_block']}></div>
                </td>
            ))}
        </tr>
    )
}