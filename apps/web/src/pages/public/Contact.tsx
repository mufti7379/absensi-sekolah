import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const contactSchema = z.object({
  nama: z.string().min(3, 'Nama minimal 3 karakter'),
  email: z.string().email('Format email tidak valid'),
  subjek: z.string().min(5, 'Subjek minimal 5 karakter'),
  pesan: z.string().min(20, 'Pesan minimal 20 karakter'),
})

type ContactFormValues = z.infer<typeof contactSchema>

const contactInfo = [
  {
    icon: MapPin,
    title: 'Alamat',
    value: 'Jl. Pendidikan No. 12, Kecamatan Sukamaju, Kota Bandung, Jawa Barat 40123',
  },
  {
    icon: Mail,
    title: 'Email Admin IT',
    value: 'admin.it@sman-harapanbangsa.sch.id',
  },
  {
    icon: Phone,
    title: 'Telepon',
    value: '(022) 1234-5678',
  },
  {
    icon: Clock,
    title: 'Jam Layanan',
    value: 'Senin - Jumat, 07.00 - 15.00 WIB',
  },
]

export function ContactPage() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { nama: '', email: '', subjek: '', pesan: '' },
  })

  function onSubmit(values: ContactFormValues) {
    toast.success(`Terima kasih ${values.nama}, pesan Anda sudah terkirim ke admin IT sekolah.`)
    form.reset()
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <div className="text-center">
        <h1 className="font-heading text-4xl font-extrabold tracking-tight">Kontak</h1>
        <p className="mt-4 text-muted-foreground">
          Ada pertanyaan seputar AbsenWajah? Hubungi admin IT sekolah kami.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          {contactInfo.map((item) => (
            <Card key={item.title}>
              <CardContent className="flex items-start gap-4 p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">{item.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="nama"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nama Lengkap</FormLabel>
                        <FormControl>
                          <Input placeholder="Andi Pratama Wijaya" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="nama@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="subjek"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subjek</FormLabel>
                      <FormControl>
                        <Input placeholder="Kendala registrasi wajah" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="pesan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pesan</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Tuliskan pertanyaan atau kendala Anda di sini..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full sm:w-auto">
                  Kirim Pesan
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
