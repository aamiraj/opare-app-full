import Image from "next/image";
import React from "react";
import Spice from "../../assets/spice1.jpg";
import { HiOutlineTrash } from "react-icons/hi";

const CartSmall = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox checkbox-primary" />
              </label>
            </th>
            <th>
              <p className="text-2xl">Items</p>
            </th>

            <th>
              <p className="text-2xl">Price</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox checkbox-primary" />
              </label>
            </th>
            <td>
              <div className="flex flex-col gap-4 items-start">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        width={50}
                        height={50}
                        src={Spice}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Termeric Spice 200g</div>
                    <div className="badge badge-sm">Spice</div>
                  </div>
                </div>
                <div>
                  <div className="join">
                    <button className="btn btn-sm join-item">-</button>
                    <input
                      defaultValue={1}
                      name="quantity"
                      type="number"
                      className="input input-sm input-bordered rounded-none w-[50px] max-w-xs"
                    />
                    <button className="btn btn-sm join-item">+</button>
                  </div>
                </div>
              </div>
            </td>

            <td>
              <div className="flex flex-col gap-4 items-start">
                <p className="text-xl text-secondary">100 Tk.</p>
                <button type="button">
                  <HiOutlineTrash />
                </button>
              </div>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox checkbox-primary" />
              </label>
            </th>
            <td>
              <div className="flex flex-col gap-4 items-start">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        width={50}
                        height={50}
                        src={Spice}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Termeric Spice 200g</div>
                    <div className="badge badge-sm">Spice</div>
                  </div>
                </div>
                <div>
                  <div className="join">
                    <button className="btn btn-sm join-item">-</button>
                    <input
                      defaultValue={1}
                      name="quantity"
                      type="number"
                      className="input input-sm input-bordered rounded-none w-[50px] max-w-xs"
                    />
                    <button className="btn btn-sm join-item">+</button>
                  </div>
                </div>
              </div>
            </td>

            <td>
              <div className="flex flex-col gap-4 items-start">
                <p className="text-xl text-secondary">100 Tk.</p>
                <button type="button">
                  <HiOutlineTrash />
                </button>
              </div>
            </td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox checkbox-primary" />
              </label>
            </th>
            <td>
              <div className="flex flex-col gap-4 items-start">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        width={50}
                        height={50}
                        src={Spice}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Termeric Spice 200g</div>
                    <div className="badge badge-sm">Spice</div>
                  </div>
                </div>
                <div>
                  <div className="join">
                    <button className="btn btn-sm join-item">-</button>
                    <input
                      defaultValue={1}
                      name="quantity"
                      type="number"
                      className="input input-sm input-bordered rounded-none w-[50px] max-w-xs"
                    />
                    <button className="btn btn-sm join-item">+</button>
                  </div>
                </div>
              </div>
            </td>

            <td>
              <div className="flex flex-col gap-4 items-start">
                <p className="text-xl text-secondary">100 Tk.</p>
                <button type="button">
                  <HiOutlineTrash />
                </button>
              </div>
            </td>
          </tr>
          {/* row 4 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox checkbox-primary" />
              </label>
            </th>
            <td>
              <div className="flex flex-col gap-4 items-start">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        width={50}
                        height={50}
                        src={Spice}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Termeric Spice 200g</div>
                    <div className="badge badge-sm">Spice</div>
                  </div>
                </div>
                <div>
                  <div className="join">
                    <button className="btn btn-sm join-item">-</button>
                    <input
                      defaultValue={1}
                      name="quantity"
                      type="number"
                      className="input input-sm input-bordered rounded-none w-[50px] max-w-xs"
                    />
                    <button className="btn btn-sm join-item">+</button>
                  </div>
                </div>
              </div>
            </td>

            <td>
              <div className="flex flex-col gap-4 items-start">
                <p className="text-xl text-secondary">100 Tk.</p>
                <button type="button">
                  <HiOutlineTrash />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CartSmall;
