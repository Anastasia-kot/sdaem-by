import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Breadcrumbs.module.scss'
import React, { FC } from 'react'
import house from './../../../public/images/svg/house_violet.svg'

type Props = {
    breadcrumbs: Array<{name: string, value:string}>
}
export const Breadcrumbs: FC<Props> = ({breadcrumbs}) => {
    return (
        <nav>
            <ol className={styles.breadcrumbs}>

                <li key={0} className={styles.breadcrumbs__item}>
                    <Link href={`/`} className={styles.ReadButton}>
                        <Image src={house} alt='house' className={styles.breadcrumbs__icon} />
                    </Link>
                </li>

                {breadcrumbs.map(({ name, value }, index, array) => 
                    <li key={index+1}
                        className={classNames(
                            styles.breadcrumbs__item,
                            { [styles.active]: (index === 0 && array.length>1 )},
                        )}
                    >
                        {(index === 0 && array.length > 1)
                            ?   <Link href={`/${name}`} >
                                    {value}
                                </Link>
                            : value
                        }
                    </li>
                )}

             </ol>
        </nav>
    )
}
