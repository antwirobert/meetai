import { authClient } from '@/lib/auth-client';
import { LoaderIcon } from 'lucide-react';
import React from 'react'
import CallConnect from './call-connect';
import { generateAvatarUri } from '@/lib/avatar';

interface Props {
    meetingId: string;
    meetingName: string;
}

const CallProvider = ({ meetingId, meetingName }: Props) => {
    const { data, isPending } = authClient.useSession()

    if(!data || isPending) {
        return (
            <div className="flex h-screen items-center justify-center bg-radial from-sidebar-accent to-sidebar">
                <LoaderIcon className='size-6 animate-spin text-white' />
            </div>
        )
    }

  return (
    <CallConnect 
        meetingId={meetingId}
        meetingName={meetingName}
        userId={data.user.id}
        userImage={data.user.image ?? generateAvatarUri({ seed: data.user.name, variant: "initials" })}
        userName={data.user.name}
    />
  )
}

export default CallProvider