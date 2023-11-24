import { Avatar, Card, Input, Modal } from 'antd';
import React, { useState } from 'react'
import { EditOutlined } from "@ant-design/icons"
export default function UserView({ data }) {
    const [user, setUser] = useState(data);
    const [bio, setBio] = useState(data.bio)
    const [bioOpen, setBioOpen] = useState(false)
    const [editBio, setEditBio] = useState(data.bio)
    function onClickBioEdit() {
        setBio(editBio)
        setBioOpen(false)
    }
    return (
        <div className='rentok-userview-main'>
            <div className='rentok-userview-content-div'>
                <Card bordered>
                    <Avatar shape='square' src={<img src={user.profilePic} alt='profile'></img>} size="large" style={{ width: "264px", height: "264px" }} />
                    <h2>{user.name}</h2>
                    <div style={{ display: "flex", gap: "10px" }}> <h4>{bio}</h4> <EditOutlined style={{ cursor: "pointer" }} onClick={() => setBioOpen(true)} /></div>
                    <Modal open={bioOpen} onOk={onClickBioEdit} onCancel={() => setBioOpen(false)}>
                        <div>
                            <h3>Edit your bio* </h3>
                            <Input value={editBio} onChange={(e) => setEditBio(e.target.value)} onPressEnter={onClickBioEdit} />
                        </div>
                    </Modal>
                    <hr></hr>
                    <p>{user.about}</p>
                </Card>
            </div>
        </div>
    )
}