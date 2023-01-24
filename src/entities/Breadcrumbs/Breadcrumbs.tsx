import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Breadcrumbs.module.scss'
import React, { FC } from 'react'

type Props = {
    breadcrumbs: Array<string> | Array<{name: string, value:string}>
}
export const Breadcrumbs: FC<Props> = React.memo(({breadcrumbs}) => {


    return (
        <nav>
            <ol className={styles.BreadCrumbsList}>

                <li key={0} className={styles.BreadCrumbsItem}>
                    <Link href={`/`} className={styles.ReadButton}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.HomeImage}>
                            <g clipPath="url(#clip0_305_2083)">
                                <path d="M11.7985 5.36427L6.41446 0.458394C6.17814 0.243027 5.82177 0.243051 5.58554 0.458371L0.201516 5.3643C0.0122119 5.5368 -0.0503192 5.80258 0.042165 6.04138C0.134673 6.28019 0.359907 6.43448 0.616008 6.43448H1.47593V11.3498C1.47593 11.5447 1.63394 11.7027 1.82883 11.7027H4.77993C4.97481 11.7027 5.13283 11.5447 5.13283 11.3498V8.36537H6.86724V11.3498C6.86724 11.5447 7.02526 11.7027 7.22014 11.7027H10.1711C10.366 11.7027 10.524 11.5447 10.524 11.3498V6.43448H11.3841C11.6402 6.43448 11.8654 6.28016 11.9579 6.04138C12.0503 5.80256 11.9878 5.5368 11.7985 5.36427Z" fill="#664EF9" />
                                <path d="M10.4317 1.00195H8.06177L10.7846 3.47779V1.35483C10.7846 1.15995 10.6266 1.00195 10.4317 1.00195Z" fill="#664EF9" />
                            </g>
                            <defs>
                                <clipPath id="clip0_305_2083">
                                    <rect width="12" height="12" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </li>

                {breadcrumbs.map(b => 
                    <li 
                        key={breadcrumbs.indexOf(b)+1}
                        className={classNames(
                            styles.BreadCrumbsItem,
                            { [styles.ActiveItem]: (breadcrumbs.indexOf(b)===0 && breadcrumbs.length>1 )},
                        )}
                     >

                        {
                            (breadcrumbs.indexOf(b) === 0 && breadcrumbs.length > 1)
                                ? <Link href={`/${b.name}`} className={styles.ReadButton}>
                                    {b.value}
                                </Link>
                                : <>{b.value}</>
                        }
                        </li>)}

             </ol>
        </nav>
    )
}
)

Breadcrumbs.displayName = 'Breadcrumbs';
