"use client";

import React from 'react'
import {Card, CardBody, Button, CardFooter, Image, useDisclosure, Modal, ModalHeader, ModalContent, ModalBody, ModalFooter,} from "@nextui-org/react";

const konten1 = () => {
    const modal3 = useDisclosure();
    const list = [
        {
          title: "Orange",
          img: "gambar2.jpg",
          price: "$5.50",
        },
        {
          title: "Tangerine",
          img: "gambar2.jpg",
          price: "$3.00",
        },
        {
          title: "Raspberry",
          img: "gambar2.jpg",
          price: "$10.00",
        },
        {
          title: "Lemon",
          img: "gambar2.jpg",
          price: "$5.30",
        },
        {
          title: "Avocado",
          img: "gambar2.jpg",
          price: "$15.70",
        },
        {
          title: "Lemon 2",
          img: "gambar2.jpg",
          price: "$8.00",
        },
        {
          title: "Banana",
          img: "gambar2.jpg",
          price: "$7.50",
        },
        {
          title: "Watermelon",
          img: "gambar2.jpg",
          price: "$12.20",
        },
      ];
      return (
        <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
          {list.map((item, index) => (
            <Card shadow="sm" key={index} isPressable onPress={(modal3.onOpen)}>
            <Modal backdrop='transparent' isOpen={modal3.isOpen} onOpenChange={modal3.onOpenChange}>
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                  <ModalBody>
                    <p> 
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nullam pulvinar risus non risus hendrerit venenatis.
                      Pellentesque sit amet hendrerit risus, sed porttitor quam.
                    </p>
                    <p>
                      Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                      dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                      Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                      Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                      proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                    </p>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    <Button className='bg-teal-500' onPress={modal3.onClose}>
                      Action
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[140px]"
                  src={item.img}
                />
              </CardBody>
              <CardFooter className="text-small justify-between">
                <b>{item.title}</b>
                <p className="text-default-500">{item.price}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      );
}

export default konten1