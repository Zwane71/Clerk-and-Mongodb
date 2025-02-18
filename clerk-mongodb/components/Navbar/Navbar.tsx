import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	const { userId } = auth();

	return (
		<div className='bg-cyan-950 rounded-b-xl'>
			<ul className='flex justify-between py-4 px-4'>
				<li>
					<Link href={"/"}>Home</Link>
				</li>
				<li className='flex items-center'>
					<Link href={"/client"}>Client Page</Link>
				</li>
				<li className='flex gap-6 items-center'>
					{!userId ? (
						<>
							<li>
								<Link href={"/sign-in"}> Login</Link>
							</li>
							<li>
								<Link href={"/sign-up"}> Sign up</Link>
							</li>
						</>
					) : (
						<>
							<li>
								<Link href={"/profile"}> Profile</Link>
							</li>
							<li>
								<UserButton />
							</li>
						</>
					)}
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
