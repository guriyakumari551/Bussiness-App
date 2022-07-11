import React from 'react'
import {ChannelList,useChatContext} from 'stream-chat-react'
import Cookies from 'universal-cookie'
import HospitalIcon from '../assets/hospital.png'
import LogoutIcon from '../assets/logout.png'
import {ChannelSearch,TeamChannelList,TeamChannelPreview} from './'
const SideBar =()=>(

  <div className='channel-list__sidebar'>
      <div className='cchannel-list__sidebar__icon1'>
         <div className='icon1__inner'>
           <img src ={HospitalIcon} alt ="Hospital" width ="30"/>
         </div>

      
      </div>

    
      
      <div className='channel-list__sidebar__icon2'>
         <div className='icon2__inner'>
         <img src ={LogoutIcon} alt ="Logut" width ="30"/>
         </div>

      </div>
  </div>
  )
const CompanyHeader=()=>(
  <div className='channel-list__header'>
  <p className='channel-list__header__text'>Medical Pager</p>

  </div>
)
function ChannelListContainer() {
  return (
    <>
      <SideBar/>
    <div className='channel-list__list__wrapper '>
      <CompanyHeader/>
      <ChannelSearch/>
      <ChannelList
      filters={{}}
      channelRenderFilterfn={()=>{}}
      List ={(listProps)=>(
        <TeamChannelList
          {...listProps}
          type="team"
        />
        

      )}
      Preview={(PreviewProps)=>{
        <TeamChannelPreview
        {...PreviewProps}
        type="team"



        />

      }}
      />
      <ChannelList
      filters={{}}
      channelRenderFilterfn={()=>{}}
      List ={(listProps)=>(
        <TeamChannelList
          {...listProps}
          type="messaging"
        />
        

      )}
      Preview={(PreviewProps)=>{
        <TeamChannelPreview
        {...PreviewProps}
        type="messaging"



        />

      }}
      />

    </div>
    </>
  )
}

export default ChannelListContainer