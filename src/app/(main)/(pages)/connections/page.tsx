import { CONNECTIONS } from '@/lib/constants';
import React from 'react';
import ConnectionCard from './_components/connection-card';

type Props = {
    searchParams?: { [key: string]: string | undefined} 
}
// WIP : Connections to be completed 

const Connections = (props: Props) => {
    return(
        <div className="flex flex-col gap-4 relative">
            <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg
            flex items-center border-b">
            Connections
            </h1>
            <div className="flex flex-col gap-4 relative">  
                <section className='flex flex-col gap-4 p-6 text-muted-foreground'>
                    Connect all your apps directly from here. You may need to connect these
                    apps regularly to refresh verification.
                    {CONNECTIONS.map((connection) => (
                        <ConnectionCard 
                            key={connection.title}
                            title={connection.title}
                            description={connection.description}
                            icon={connection.image}
                            type={connection.title}
                            // connected={connections}
                        />
                    ))}
                </section>
            </div>
        </div>
    )
}
export default Connections