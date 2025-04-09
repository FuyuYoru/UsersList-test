import { FC } from "react"

export const UserAvatar: FC<{avatar: string, size?: number}> = ({avatar, size=25}) => {
    return (
        <div style={{width: size, height: size}}>
            <img src={avatar} />
        </div>
    )
}